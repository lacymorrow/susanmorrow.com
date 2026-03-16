// Secure server-side authentication for admin pages
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;
  
  // Use environment variable for password
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'susantherapy2026';
  
  if (password === ADMIN_PASSWORD) {
    // Set secure session cookie (HTTP-only, secure in production)
    res.setHeader('Set-Cookie', `admin-session=authenticated; HttpOnly; Path=/; Max-Age=86400; ${process.env.NODE_ENV === 'production' ? 'Secure; ' : ''}SameSite=Strict`);
    
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ error: 'Invalid password' });
  }
}