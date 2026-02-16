const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

async function verifyTurnstile(token) {
	const secret = process.env.TURNSTILE_SECRET_KEY;
	if (!secret) {
		console.error('[verifyTurnstile] Missing TURNSTILE_SECRET_KEY');
		return { success: false, error: 'Server misconfiguration' };
	}

	try {
		const response = await fetch(TURNSTILE_VERIFY_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({ secret, response: token }),
		});

		const data = await response.json();
		if (data.success) {
			return { success: true };
		}

		return { success: false, error: data['error-codes']?.join(', ') || 'Verification failed' };
	} catch (err) {
		console.error('[verifyTurnstile] Request failed:', err);
		return { success: false, error: 'Verification request failed' };
	}
}

export default verifyTurnstile;
