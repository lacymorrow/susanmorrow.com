import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ReceiptGenerator from '../../components/ReceiptGenerator';

const AdminReceipts = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const response = await fetch('/api/admin/verify-session', {
        credentials: 'include'
      });
      
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        // Redirect to login page
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      router.push('/admin/login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    // Clear cookies by setting them to expire
    document.cookie = 'auth-session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = 'auth-expires=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    router.push('/admin/login');
  };

  if (isLoading) {
    return (
      <Layout>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '60vh' 
        }}>
          <div style={{ textAlign: 'center' }}>
            <p>Verifying access...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <Layout>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '2rem' 
        }}>
          <div style={{ textAlign: 'left' }}>
            <h1 style={{ margin: 0, color: '#007cba' }}>Receipt Generator</h1>
            <p style={{ color: '#666', margin: '0.5rem 0 0 0' }}>
              Generate professional receipts for clients
            </p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: '0.5rem 1rem',
              background: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            Logout
          </button>
        </header>
        <ReceiptGenerator />
      </div>
    </Layout>
  );
};

export default AdminReceipts;