import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Sidebar = ({ activeTab, onTabChange, user }) => {
  const { darkMode } = useContext(ThemeContext);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'scans', label: 'Scans', icon: '🔍' },
    { id: 'schedule', label: 'Schedule', icon: '📅' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'support', label: 'Support', icon: '🆘' }
  ];

  return (
    <div
      style={{
        width: '240px',
        height: '100vh',
        backgroundColor: darkMode ? '#1A1A1A' : '#F9FAFB',
        borderRight: `1px solid ${darkMode ? '#333' : '#E5E7EB'}`,
        padding: '1.5rem 0',
        overflowY: 'auto',
        position: 'fixed',
        left: 0,
        top: 0
      }}
    >
      {/* Logo */}
      <div style={{ padding: '0 1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0CC8A8' }}>
          ◉ aps
        </h2>
      </div>

      {/* Navigation Items */}
      <nav>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            style={{
              width: '100%',
              padding: '0.75rem 1.5rem',
              backgroundColor: activeTab === item.id 
                ? darkMode ? '#0CC8A8' : '#D1FAE5'
                : 'transparent',
              color: activeTab === item.id
                ? darkMode ? '#000' : '#059669'
                : darkMode ? '#9CA3AF' : '#6B7280',
              border: 'none',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '0.95rem',
              fontWeight: activeTab === item.id ? '600' : '500',
              transition: 'all 0.2s ease',
              borderRadius: activeTab === item.id ? '0.375rem' : '0'
            }}
          >
            <span style={{ marginRight: '0.75rem' }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* User Profile at Bottom */}
      {user && (
        <div
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '1.5rem',
            right: '1.5rem',
            paddingTop: '1rem',
            borderTop: `1px solid ${darkMode ? '#333' : '#E5E7EB'}`
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#0CC8A8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              {user.name.charAt(0)}
            </div>
            <div style={{ fontSize: '0.875rem' }}>
              <p style={{ margin: 0, fontWeight: '600' }}>{user.email}</p>
              <p style={{ margin: 0, opacity: 0.7 }}>{user.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;