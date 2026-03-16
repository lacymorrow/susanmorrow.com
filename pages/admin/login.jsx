import React, { useState } from 'react';
import Layout from '../../components/Layout';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSendLink = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setError('');
    
    try {
      const response = await fetch('/api/admin/magic-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email.trim().toLowerCase(),
          action: 'send' 
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Magic link sent! Check your email and click the link to access the receipt generator.');
        setEmail('');
      } else {
        setError(data.error || 'Failed to send magic link');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '60vh',
        padding: '2rem'
      }}>
        <div style={{ 
          background: '#fff', 
          padding: '2rem', 
          borderRadius: '8px', 
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          maxWidth: '400px',
          width: '100%'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#007cba' }}>
            Receipt Generator Access
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '1.5rem' }}>
            Enter your email to receive a secure login link
          </p>
          
          {message && (
            <div style={{ 
              background: '#d4edda', 
              color: '#155724', 
              padding: '0.75rem', 
              borderRadius: '4px', 
              marginBottom: '1rem',
              border: '1px solid #c3e6cb'
            }}>
              {message}
            </div>
          )}
          
          {error && (
            <div style={{ 
              background: '#f8d7da', 
              color: '#721c24', 
              padding: '0.75rem', 
              borderRadius: '4px', 
              marginBottom: '1rem',
              border: '1px solid #f5c6cb'
            }}>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSendLink}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Email Address:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
                placeholder="Enter your email address"
                required
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: isLoading ? '#ccc' : '#007cba',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
            >
              {isLoading ? 'Sending...' : 'Send Magic Link'}
            </button>
          </form>
          
          <p style={{ 
            textAlign: 'center', 
            marginTop: '1rem', 
            fontSize: '0.9rem', 
            color: '#666' 
          }}>
            The link will expire in 15 minutes for security
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminLogin;