import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

const Header = ({ 
  title, 
  breadcrumb = [], 
  onExport, 
  onStop 
}) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        marginLeft: '240px',
        padding: '1rem 2rem',
        backgroundColor: darkMode ? '#1A1A1A' : '#FFFFFF',
        borderBottom: `1px solid ${darkMode ? '#333' : '#E5E7EB'}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {/* Left side - Title and Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h1 style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>
          {title}
        </h1>
        {breadcrumb && breadcrumb.length > 0 && (
          <div style={{ fontSize: '0.875rem', opacity: 0.6 }}>
            {breadcrumb.map((item, index) => (
              <span key={index}>
                {index > 0 && <span style={{ margin: '0 0.5rem' }}>/</span>}
                <span style={{ color: item.color || '#0CC8A8', cursor: 'pointer' }}>
                  {item.label || item}
                </span>
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Right side - Action Buttons + Theme Toggle */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {/* Export Report Button */}
        <Button 
          onClick={onExport || (() => alert('Export Report clicked'))} 
          variant="secondary"
          size="md"
        >
          Export Report
        </Button>

        {/* Stop Scan Button */}
        <Button 
          onClick={onStop || (() => alert('Stop Scan clicked'))} 
          variant="danger"
          size="md"
        >
          Stop Scan
        </Button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: darkMode ? '#333' : '#F3F4F6',
            border: `1px solid ${darkMode ? '#555' : '#D1D5DB'}`,
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontSize: '1.2rem'
          }}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  );
};

export default Header;