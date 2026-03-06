import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ReceiptGenerator from '../../components/ReceiptGenerator';

const AdminReceipts = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password protection - in production, use environment variable
    if (password === 'susantherapy2026') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!isAuthenticated) {
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
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              Receipt Generator Access
            </h2>
            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Password:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter admin password"
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: '#007cba',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1>Receipt Generator</h1>
          <p style={{ color: '#666' }}>Generate professional receipts for clients</p>
        </header>
        <ReceiptGenerator />
      </div>
    </Layout>
  );
};

export default AdminReceipts;