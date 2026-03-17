import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

// Simple file-based token storage for this solo practice
const TOKEN_FILE = path.join(process.cwd(), '.magic-tokens.json');

// Rate limiting - simple in-memory store
const rateLimits = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 3;

function getTokens() {
  try {
    if (fs.existsSync(TOKEN_FILE)) {
      const data = fs.readFileSync(TOKEN_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading tokens:', error);
  }
  return {};
}

function saveTokens(tokens) {
  try {
    fs.writeFileSync(TOKEN_FILE, JSON.stringify(tokens, null, 2));
  } catch (error) {
    console.error('Error saving tokens:', error);
  }
}

function cleanExpiredTokens() {
  const tokens = getTokens();
  const now = Date.now();
  const cleaned = {};
  
  for (const [token, data] of Object.entries(tokens)) {
    if (data.expires > now) {
      cleaned[token] = data;
    }
  }
  
  saveTokens(cleaned);
  return cleaned;
}

function checkRateLimit(email) {
  const now = Date.now();
  const key = email.toLowerCase();
  
  if (!rateLimits.has(key)) {
    rateLimits.set(key, { count: 0, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  const limit = rateLimits.get(key);
  
  if (now > limit.resetTime) {
    rateLimits.set(key, { count: 0, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (limit.count >= MAX_ATTEMPTS) {
    return false;
  }
  
  limit.count++;
  return true;
}

export default async function handler(req, res) {
  // Handle GET requests for magic link verification
  if (req.method === 'GET') {
    const { token, action } = req.query;
    
    if (action === 'verify' && token) {
      return handleVerification(req, res, token);
    }
    
    return res.status(400).json({ error: 'Invalid request' });
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, action, token } = req.body;

  if (action === 'send') {
    // Send magic link
    const allowedEmail = (process.env.ADMIN_EMAIL || 'morrowsus@gmail.com').toLowerCase();
    if (!email || email.toLowerCase() !== allowedEmail) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    if (!checkRateLimit(email)) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    // Generate secure token
    const magicToken = crypto.randomBytes(32).toString('hex');
    const expires = Date.now() + (15 * 60 * 1000); // 15 minutes

    // Clean expired tokens and save new one
    const tokens = cleanExpiredTokens();
    tokens[magicToken] = {
      email: email.toLowerCase(),
      expires,
      used: false
    };
    saveTokens(tokens);

    // Create magic link - prioritize custom domain
    const baseUrl = process.env.NEXTAUTH_URL || 
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
    const magicLink = `${baseUrl}/api/admin/magic-link?token=${magicToken}&action=verify`;

    // Send email using existing email service
    try {
      const { Resend } = await import('resend');
      
      let emailResult;
      
      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const from = process.env.RESEND_FROM || 'onboarding@resend.dev';
        
        const { data, error } = await resend.emails.send({
          from,
          to: [email],
          subject: 'Receipt Generator - Secure Login Link',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #007cba;">Susan Morrow Therapy - Receipt Generator</h2>
              <p>Hello Susan,</p>
              <p>Click the link below to securely access your receipt generator:</p>
              <div style="text-align: center; margin: 2rem 0;">
                <a href="${magicLink}" 
                   style="background: #007cba; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
                  Access Receipt Generator
                </a>
              </div>
              <p style="color: #666; font-size: 14px;">
                This link will expire in 15 minutes for security.<br>
                If you didn't request this, please ignore this email.
              </p>
              <hr style="margin: 2rem 0;">
              <p style="color: #999; font-size: 12px;">
                Susan Morrow, MSW, LCSW<br>
                429 E Worthington Ave., Charlotte, NC 28203
              </p>
            </div>
          `
        });

        if (error) {
          throw new Error(error.message);
        }
        
        emailResult = { ok: true, provider: 'resend' };
      } else {
        throw new Error('No email provider configured');
      }

      res.status(200).json({ success: true, message: 'Magic link sent to your email' });
    } catch (error) {
      console.error('Email error:', error);
      res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }

  } else if (action === 'verify') {
    return handleVerification(req, res, token);
  } else {
    res.status(400).json({ error: 'Invalid action' });
  }
}

function handleVerification(req, res, token) {
  if (!token) {
    return res.redirect(302, '/admin/login?error=missing-token');
  }

  const tokens = cleanExpiredTokens();
  const tokenData = tokens[token];

  if (!tokenData || tokenData.used || tokenData.expires < Date.now()) {
    return res.redirect(302, '/admin/login?error=invalid-token');
  }

  // Mark token as used
  tokenData.used = true;
  saveTokens(tokens);

  // Create session
  const sessionToken = crypto.randomBytes(32).toString('hex');
  const sessionExpires = Date.now() + (8 * 60 * 60 * 1000); // 8 hours

  // Set secure cookie
  res.setHeader('Set-Cookie', [
    `auth-session=${sessionToken}; HttpOnly; Path=/; Max-Age=${8 * 60 * 60}; SameSite=Strict${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`,
    `auth-expires=${sessionExpires}; Path=/; Max-Age=${8 * 60 * 60}; SameSite=Strict${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
  ]);

  // Redirect to admin area
  res.redirect(302, '/admin/receipts');
}