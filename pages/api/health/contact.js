/**
 * Contact-form health check (LAC-3569).
 *
 * Verifies the configuration that historically takes the contact form down —
 * a missing/revoked email-provider key or a missing "from"/"to" address —
 * WITHOUT sending a real email. A daily CI job (see
 * .github/workflows/contact-form-healthcheck.yml) hits this endpoint and pages
 * us the moment any check fails, so the form can't silently break again.
 *
 * Optionally gated by HEALTHCHECK_TOKEN: if that env var is set, callers must
 * pass ?token=... or an "x-healthcheck-token" header. If it is unset, the
 * endpoint is open (so monitoring keeps working even before the token exists).
 */

const RESEND_DOMAINS_URL = 'https://api.resend.com/domains';

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
	}

	const ok = checks.every((c) => c.ok);
	// Disable caching so monitors always see live state.
	res.setHeader('Cache-Control', 'no-store, max-age=0');
	return res.status(ok ? 200 : 503).json({ ok, checks });
};

export default handler;
