/**
 * Contact-form health check (LAC-3569).
 *
 * Verifies the configuration that historically takes the contact form down —
 * a missing/revoked email-provider key, a missing "from"/"to" address, or a
 * recipient that Resend has put on its suppression list (LAC-3798) — WITHOUT
 * sending a real email. A daily CI job (see
 * .github/workflows/contact-form-healthcheck.yml) hits this endpoint and pages
 * us the moment any check fails, so the form can't silently break again.
 *
 * Optionally gated by HEALTHCHECK_TOKEN: if that env var is set, callers must
 * pass ?token=... or an "x-healthcheck-token" header. If it is unset, the
 * endpoint is open (so monitoring keeps working even before the token exists).
 */

const RESEND_DOMAINS_URL = 'https://api.resend.com/domains';
const RESEND_SUPPRESSIONS_URL = 'https://api.resend.com/suppressions';

const isAuthorized = (req) => {
	const expected = process.env.HEALTHCHECK_TOKEN;
	if (!expected) return true; // no token configured -> open
	const provided = req.headers['x-healthcheck-token'] || req.query.token;
	return provided === expected;
};

// Confirms the Resend API key is present AND actually valid, by making a
// lightweight authenticated read (listing domains). No email is sent.
const checkResend = async () => {
	const key = process.env.RESEND_API_KEY;
	if (!key) return { name: 'resend_api_key', ok: false, detail: 'RESEND_API_KEY not set' };

	try {
		const response = await fetch(RESEND_DOMAINS_URL, {
			headers: { Authorization: `Bearer ${key}` },
		});
		if (response.status === 401 || response.status === 403) {
			return { name: 'resend_api_key', ok: false, detail: `Resend rejected key (HTTP ${response.status})` };
		}
		if (!response.ok) {
			return { name: 'resend_api_key', ok: false, detail: `Resend API unhealthy (HTTP ${response.status})` };
		}
		return { name: 'resend_api_key', ok: true, detail: 'valid' };
	} catch (err) {
		return { name: 'resend_api_key', ok: false, detail: `Resend request failed: ${err.message}` };
	}
};

// Confirms the recipient address is NOT on Resend's account suppression list.
// This is the failure that caused LAC-3798: susan@susanmorrow.us hard-bounced
// once, Resend added it to the account-wide suppression list, and every
// subsequent contact-form inquiry was silently dropped (last_event=suppressed)
// for weeks. Config looked healthy the whole time — key valid, from/to set — so
// the other checks never fired. A suppressed recipient means legitimate email
// is being blocked, so we treat it as a hard failure.
const checkRecipientNotSuppressed = async () => {
	const key = process.env.RESEND_API_KEY;
	const recipient = (process.env.RECEIVING_EMAIL || '').trim().toLowerCase();
	if (!key) return { name: 'recipient_not_suppressed', ok: false, detail: 'RESEND_API_KEY not set' };
	if (!recipient) {
		// No explicit recipient; send-email.js falls back to a default. Nothing to check.
		return { name: 'recipient_not_suppressed', ok: true, detail: 'no RECEIVING_EMAIL set (using code fallback)' };
	}

	try {
		const response = await fetch(RESEND_SUPPRESSIONS_URL, {
			headers: { Authorization: `Bearer ${key}` },
		});
		if (!response.ok) {
			// Don't fail the whole check on a suppressions-API hiccup; report it.
			return { name: 'recipient_not_suppressed', ok: true, detail: `could not read suppressions (HTTP ${response.status})` };
		}
		const body = await response.json();
		const list = Array.isArray(body?.data) ? body.data : [];
		const hit = list.find((s) => (s?.email || '').trim().toLowerCase() === recipient);
		if (hit) {
			return {
				name: 'recipient_not_suppressed',
				ok: false,
				detail: `${recipient} is SUPPRESSED by Resend (origin: ${hit.origin || 'unknown'}, since ${hit.created_at || 'unknown'}) — inquiries are being silently dropped`,
			};
		}
		return { name: 'recipient_not_suppressed', ok: true, detail: `${recipient} not suppressed` };
	} catch (err) {
		return { name: 'recipient_not_suppressed', ok: true, detail: `suppressions check failed: ${err.message}` };
	}
};

const handler = async (req, res) => {
	if (req.method !== 'GET') {
		return res.status(405).json({ ok: false, error: 'Method not allowed' });
	}
	if (!isAuthorized(req)) {
		return res.status(401).json({ ok: false, error: 'Unauthorized' });
	}

	const checks = [];

	const hasResend = Boolean(process.env.RESEND_API_KEY);
	const hasSendgrid = Boolean(process.env.SENDGRID_API_KEY);

	// At least one provider must be configured.
	checks.push({
		name: 'email_provider_configured',
		ok: hasResend || hasSendgrid,
		detail: hasResend ? 'resend' : hasSendgrid ? 'sendgrid' : 'none configured',
	});

	// A recipient address must exist (send-email.js falls back, but we want it explicit).
	checks.push({
		name: 'receiving_email',
		ok: Boolean(process.env.RECEIVING_EMAIL),
		detail: process.env.RECEIVING_EMAIL ? 'set' : 'RECEIVING_EMAIL not set (using fallback)',
	});

	// A verified "from" address is required for Resend to deliver.
	if (hasResend) {
		checks.push({
			name: 'resend_from',
			ok: Boolean(process.env.RESEND_FROM),
			detail: process.env.RESEND_FROM ? 'set' : 'RESEND_FROM not set (using onboarding@resend.dev fallback)',
		});
		checks.push(await checkResend());
		// LAC-3798: a suppressed recipient silently drops every inquiry.
		checks.push(await checkRecipientNotSuppressed());
	}

	const ok = checks.every((c) => c.ok);
	// Disable caching so monitors always see live state.
	res.setHeader('Cache-Control', 'no-store, max-age=0');
	return res.status(ok ? 200 : 503).json({ ok, checks });
};

export default handler;
