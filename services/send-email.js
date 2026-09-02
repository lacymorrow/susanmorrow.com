// import fetch from 'node-fetch';
import { Resend } from 'resend';

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';
const DEFAULT_RECIPIENT = 'morrowsus@gmail.com';

// Test-mode routing (LAC-3652): lets us exercise the full contact-form
// pipeline — real submission → real provider send → real inbox — WITHOUT
// delivering to Susan. When the form is submitted with the sentinel sender
// address, the message is rerouted to an inbox we control instead.
const TEST_SENDER_EMAIL = (process.env.CONTACT_TEST_EMAIL || 'test@test.com').trim().toLowerCase();
const TEST_RECIPIENT = process.env.CONTACT_TEST_RECIPIENT || 'admin@buildandserve.com';

// Decides who receives the message. Real inquiries go to Susan
// (RECEIVING_EMAIL); submissions from the sentinel test address are diverted
// to an inbox we control so we can verify delivery end-to-end.
const resolveRecipient = (email) => {
	const normalized = (email || '').trim().toLowerCase();
	if (normalized === TEST_SENDER_EMAIL) {
		return { to: TEST_RECIPIENT, isTest: true };
	}
	return { to: process.env.RECEIVING_EMAIL || DEFAULT_RECIPIENT, isTest: false };
};

const buildSubject = (name, isTest) =>
	`${isTest ? '[TEST] ' : ''}👻 SusanMorrow.us Inquiry: ${name}`;

const sendWithSendgrid = async ({ name, email, message, to, isTest }) => {
	const body = {
			personalizations: [
				{
					to: [
						{
							email: to,
						},
					],
					subject: buildSubject(name, isTest),
				},
			],
			from: {
				email: 'me@lacymorrow.com',
				name: `Susan Morrow`,
			},
			replyTo: {
				email,
				name,
			},
			content: [
				{
					type: 'text/html',
					value: `<p><b>${name}</b> just said:</p><p>${message}</p><p>${email}</p>`,
				},
			],
		}

	const response = await fetch(SENDGRID_API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
		},
		body: JSON.stringify(body),
	});

	if (!(response.ok || response.status === 202)) {
		throw new Error('SendGrid request failed');
	}

	return { ok: true, provider: 'sendgrid', status: response.status, isTest };
}

const sendWithResend = async ({ name, email, message, to, isTest }) => {
	const resendApiKey = process.env.RESEND_API_KEY;
	if (!resendApiKey) {
		throw new Error('RESEND_API_KEY missing');
	}

	const resend = new Resend(resendApiKey);
	const subject = buildSubject(name, isTest);
	const html = `<p><b>${name}</b> just said:</p><p>${message}</p><p>${email}</p>`;

	const from = process.env.RESEND_FROM || 'onboarding@resend.dev';

	const { data, error } = await resend.emails.send({
		from,
		to: [to],
		subject,
		html,
		reply_to: email ? `${name} <${email}>` : undefined,
	});

	if (error) {
		console.error('[Resend] send error:', {
			name: error?.name,
			message: error?.message,
			statusCode: error?.statusCode,
		});
		throw new Error(error.message || 'Resend request failed');
	}

	return { ok: true, provider: 'resend', id: data?.id, isTest };
}

const sendEmail = async ({
  name,
  email,
  message,
}) => {
	const { to, isTest } = resolveRecipient(email);
	if (isTest) {
		console.log(`[sendEmail] Test submission detected, routing to ${to}`);
	}

	// Prefer Resend if API key present; fallback to SendGrid
	if (process.env.RESEND_API_KEY) {
		return await sendWithResend({ name, email, message, to, isTest });
	}
	if (process.env.SENDGRID_API_KEY) {
		return await sendWithSendgrid({ name, email, message, to, isTest });
	}

	throw new Error('No email provider configured');
};

export default sendEmail;
