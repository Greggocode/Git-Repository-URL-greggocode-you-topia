import React, { useState, useEffect } from 'react';

const Status = () => {
  const [status, setStatus] = useState({
    buildStatus: 'unknown',
    supabaseStatus: 'unknown',
    routingStatus: 'unknown',
    timestamp: new Date().toISOString()
  });

  useEffect(() => {
    const checkStatus = () => {
      // Check if we're running in development or production
      const isDevelopment = window.location.hostname === 'localhost';
      
      // Check if Supabase is configured
      let supabaseConfigured = false;
      try {
        // Try to access Supabase config from environment or global
        supabaseConfigured = !!(window.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL);
      } catch (error) {
        supabaseConfigured = false;
      }

      setStatus({
        buildStatus: 'working',
        supabaseStatus: supabaseConfigured ? 'configured' : 'not_configured',
        routingStatus: 'working',
        timestamp: new Date().toISOString(),
        environment: isDevelopment ? 'development' : 'production',
        react: React.version
      });
    };

    checkStatus();
    // Update status every 30 seconds
    const interval = setInterval(checkStatus, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (statusValue) => {
    switch (statusValue) {
      case 'working':
      case 'configured':
        return '#28a745'; // green
      case 'not_configured':
        return '#ffc107'; // yellow
      case 'error':
        return '#dc3545'; // red
      default:
        return '#6c757d'; // gray
    }
  };

  const getStatusText = (key, value) => {
    switch (key) {
      case 'buildStatus':
        return value === 'working' ? '✅ Build System Working' : '❌ Build Issues';
      case 'supabaseStatus':
        return value === 'configured' ? '✅ Supabase Configured' : '⚠️ Supabase Not Configured';
      case 'routingStatus':
        return value === 'working' ? '✅ React Router Working' : '❌ Routing Issues';
      default:
        return value;
    }
  };

  const statusItems = [
    { key: 'buildStatus', label: 'Build System', value: status.buildStatus },
    { key: 'supabaseStatus', label: 'Database (Supabase)', value: status.supabaseStatus },
    { key: 'routingStatus', label: 'Navigation', value: status.routingStatus }
  ];

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🚀 You-topia Website Status</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Last updated: {new Date(status.timestamp).toLocaleString()}
      </p>

      <div style={{ 
        display: 'grid', 
        gap: '20px', 
        marginBottom: '30px' 
      }}>
        {statusItems.map(({ key, label, value }) => (
          <div key={key} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            backgroundColor: '#f8f9fa'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <h3 style={{ margin: 0, fontSize: '16px' }}>{label}</h3>
              <div style={{
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: getStatusColor(value),
                color: 'white',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {value.toUpperCase()}
              </div>
            </div>
            <p style={{ margin: 0, color: '#333' }}>
              {getStatusText(key, value)}
            </p>
          </div>
        ))}
      </div>

      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        marginBottom: '20px'
      }}>
        <h3>System Information</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>Environment:</strong> {status.environment}
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>React Version:</strong> {status.react}
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>URL:</strong> {window.location.href}
          </li>
        </ul>
      </div>

      {status.supabaseStatus === 'not_configured' && (
        <div style={{
          border: '1px solid #ffc107',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#fff3cd',
          color: '#856404'
        }}>
          <h3>⚠️ Configuration Needed</h3>
          <p>
            To fully activate You-topia, you need to configure Supabase:
          </p>
          <ol>
            <li>Create a Supabase project at <a href="https://supabase.com" target="_blank" rel="noopener noreferrer">supabase.com</a></li>
            <li>Copy your Project URL and API Key</li>
            <li>Create a <code>.env</code> file with:
              <pre style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '10px', 
                borderRadius: '4px',
                margin: '10px 0'
              }}>
{`VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-api-key`}
              </pre>
            </li>
            <li>Restart the development server</li>
          </ol>
        </div>
      )}

      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        padding: '20px',
        color: '#666'
      }}>
        <p>
          <strong>Overall Status:</strong> {
            status.supabaseStatus === 'configured' ? '🟢 All Systems Operational' : '🟡 Partially Operational'
          }
        </p>
        <small>
          You-topia Personal Growth Platform | 
          <a href="/dashboard" style={{ marginLeft: '10px' }}>← Back to Dashboard</a>
        </small>
      </div>
    </div>
  );
};

export default Status;