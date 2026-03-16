export default function handler(req, res) {
  const { 'auth-session': sessionToken, 'auth-expires': expires } = req.cookies;

  if (!sessionToken || !expires) {
    return res.status(401).json({ authenticated: false });
  }

  const expirationTime = parseInt(expires);
  const now = Date.now();

  if (now > expirationTime) {
    return res.status(401).json({ authenticated: false });
  }

  return res.status(200).json({ authenticated: true });
}