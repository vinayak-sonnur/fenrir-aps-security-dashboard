import React from 'react';

const Badge = ({ severity, count }) => {
  const severityColors = {
    critical: '#EF4444',
    high: '#F97316',
    medium: '#FBBF24',
    low: '#10B981'
  };

  const bgColor = severityColors[severity] || '#999';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        backgroundColor: bgColor,
        color: 'white',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: '700',
        margin: '2px'
      }}
    >
      {count}
    </div>
  );
};

export default Badge;