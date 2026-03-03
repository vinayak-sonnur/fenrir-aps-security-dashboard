import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false,
  size = 'md',
  style = {}
}) => {
  const variants = {
    primary: {
      bg: '#0CC8A8',
      text: '#ffffff',
      hover: '#0AB89D'
    },
    secondary: {
      bg: '#E5E7EB',
      text: '#000000',
      hover: '#D1D5DB'
    },
    danger: {
      bg: '#EF4444',
      text: '#ffffff',
      hover: '#DC2626'
    }
  };

  const sizes = {
    sm: { padding: '0.375rem 0.75rem', fontSize: '0.875rem' },
    md: { padding: '0.5rem 1rem', fontSize: '1rem' },
    lg: { padding: '0.75rem 1.5rem', fontSize: '1.125rem' }
  };

  const styleObj = variants[variant] || variants.primary;
  const sizeStyle = sizes[size] || sizes.md;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...sizeStyle,
        ...style,
        backgroundColor: disabled ? '#D1D5DB' : styleObj.bg,
        color: styleObj.text,
        border: 'none',
        borderRadius: '0.375rem',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        opacity: disabled ? 0.6 : 1
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.target.style.backgroundColor = styleObj.hover;
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.target.style.backgroundColor = styleObj.bg;
      }}
    >
      {children}
    </button>
  );
};

export default Button;