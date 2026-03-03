import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SeverityCard = ({ severity, count, change, trend }) => {
  const { darkMode } = useContext(ThemeContext);

  const severityIcons = {
    Critical: '🔴',
    High: '🟠',
    Medium: '🟡',
    Low: '🔵'
  };

  const severityColors = {
    Critical: '#EF4444',
    High: '#F97316',
    Medium: '#FBBF24',
    Low: '#10B981'
  };

  const displayIcon = severityIcons[severity] || '⭕';
  const textColor = severityColors[severity] || '#999';

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#1A1A1A' : '#FFFFFF',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        border: `1px solid ${darkMode ? '#333' : '#E5E7EB'}`,
        minWidth: '220px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      {/* Icon in top right */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '1.5rem' }}>
        {displayIcon}
      </div>
      
      {/* Content */}
      <div style={{ paddingRight: '2rem' }}>
        {/* Severity Label */}
        <h3 style={{ 
          margin: '0 0 1rem 0', 
          fontSize: '0.95rem', 
          opacity: 0.7, 
          fontWeight: '500'
        }}>
          {severity} Severity
        </h3>
        
        {/* Count Number */}
        <div style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
          {count}
        </div>
        
        <div style={{ 
          fontSize: '0.875rem', 
          opacity: 0.8,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          <span style={{ 
            color: textColor,
            fontWeight: '500',
            marginRight: '0.25rem'
          }}>
            {trend === 'up' ? '↑' : '↓'} {change}%
          </span>
          <span style={{ opacity: 0.7 }}>
            increase than yesterday
          </span>
        </div>
      </div>
    </div>
  );
};

export default SeverityCard;