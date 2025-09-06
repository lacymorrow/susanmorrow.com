// import fetch from 'node-fetch';
import { Resend } from 'resend';

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

const sendWithSendgrid = async ({ name, email, message }) => {
	const body = {
			personalizations: [
				{
					to: [
						{
							email: 'morrowsus@gmail.com',
						},
					],
					subject: `👻 SusanMorrow.us Inquiry: ${name}`,
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

	return { ok: true, provider: 'sendgrid', status: response.status };
}

const sendWithResend = async ({ name, email, message }) => {
	const resendApiKey = process.env.RESEND_API_KEY;
	if (!resendApiKey) {
		throw new Error('RESEND_API_KEY missing');
	}

	const resend = new Resend(resendApiKey);
	const subject = `👻 SusanMorrow.us Inquiry: ${name}`;
	const html = `<p><b>${name}</b> just said:</p><p>${message}</p><p>${email}</p>`;

	const from = process.env.RESEND_FROM || 'onboarding@resend.dev';
	const to = process.env.RECEIVING_EMAIL || 'morrowsus@gmail.com';

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

	return { ok: true, provider: 'resend', id: data?.id };
}

const sendEmail = async ({
  name,
  email,
  message,
}) => {
	// Prefer Resend if API key present; fallback to SendGrid
	if (process.env.RESEND_API_KEY) {
		return await sendWithResend({ name, email, message });
	}
	if (process.env.SENDGRID_API_KEY) {
		return await sendWithSendgrid({ name, email, message });
	}

	throw new Error('No email provider configured');
};

export default sendEmail;
