import sendEmail from '../../services/send-email';

const ERROR = {
	error: {
		code: 'not_found',
		message:
			"The requested endpoint was not found or doesn't support this method.",
	},
};

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const { name, email, message } = req.body;

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


