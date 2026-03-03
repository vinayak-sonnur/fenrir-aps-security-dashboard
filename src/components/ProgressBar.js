import React from 'react';

const ProgressBar = ({ progress, color = '#0CC8A8' }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '8px',
        backgroundColor: '#E5E7EB',
        borderRadius: '4px',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: color,
          transition: 'width 0.3s ease'
        }}
      />
    </div>
  );
};

export default ProgressBar;