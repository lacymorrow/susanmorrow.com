import sendEmail from '../../services/send-email';
import verifyTurnstile from '../../services/verify-turnstile';

const ERROR = {
	error: {
		code: 'not_found',
		message:
			"The requested endpoint was not found or doesn't support this method.",
	},
};

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const { name, email, message, phone, address, turnstileToken } = req.body;

		// Honeypot check — return fake 200 to not tip off bots
		if (phone || address) {
			return res
				.status(200)
				.json({ message: 'Your message was sent, thanks for reaching out  🚀' });
		}

		// Verify Turnstile token (skip gracefully if not configured or token missing)
		if (turnstileToken && process.env.TURNSTILE_SECRET_KEY) {
			const turnstileResult = await verifyTurnstile(turnstileToken);
			if (!turnstileResult.success) {
				console.warn('[sendEmail] Turnstile verification failed:', turnstileResult.error);
				return res.status(400).json({ error: { message: 'CAPTCHA verification failed' } });
			}
		} else if (!process.env.TURNSTILE_SECRET_KEY) {
			console.warn('[sendEmail] TURNSTILE_SECRET_KEY not configured, skipping verification');
		}

		const result = await sendEmail({ name, email, message }).catch((error) => {
			console.error('[sendEmail] provider error:', error);
			return null;
		});

		if (!result || result.ok !== true) {
			return res.status(500).json(ERROR);
		}

		console.log('Message sent via', result.provider);
		return res
			.status(200)
			.json({ message: 'Your message was sent, thanks for reaching out  🚀' });
	}

	return res.status(404).json(ERROR);
};

export default handler;
