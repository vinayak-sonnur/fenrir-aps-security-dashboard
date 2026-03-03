import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Button from '../components/Button';
import useIsMobile from '../hooks/useIsMobile';

const LoginPage = ({ onLoginSuccess }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const isMobile = useIsMobile();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert('Please agree to Terms & Conditions');
      return;
    }
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      alert('Please fill all fields');
      return;
    }
    onLoginSuccess();
  };

  const handleSocialLogin = (provider) => {
    alert('Login with ' + provider + ' clicked!');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: darkMode ? '#0F0F0F' : '#FFFFFF',
      color: darkMode ? '#ffffff' : '#000000',
      transition: 'all 0.3s ease',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr'
    }}>
      {/* Left Side - Gradient Background */}
      {!isMobile && (
        <div style={{
          background: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)',
          color: 'white',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Logo */}
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>
              ◉ aps
            </h1>
          </div>

          {/* Tagline */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              margin: '0 0 1rem 0',
              lineHeight: '1.3',
              fontWeight: 'bold'
            }}>
              Expert level Cybersecurity <br/>
              in <span style={{ color: '#0CC8A8' }}>hours</span> not weeks.
            </h2>
          </div>

          {/* Features List */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
              What's included
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.2rem' }}>✓</span>
                <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                  Effortlessly spider and map targets to uncover hidden security flaws
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.2rem' }}>✓</span>
                <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                  Deliver high-quality, validated findings in hours, not weeks.
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.2rem' }}>✓</span>
                <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                  Generate professional, enterprise-grade security reports automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Trustpilot Section */}
          <div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>⭐</span>
              <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>Trustpilot</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: '600' }}>
              Rated 4.5/5.0 (100k+ reviews)
            </p>
          </div>
        </div>
      )}

      {/* Right Side - Sign Up Form */}
      <div style={{
        padding: isMobile ? '1.5rem' : '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: darkMode ? '#1A1A1A' : '#FFFFFF'
      }}>
        <div style={{ width: '100%', maxWidth: isMobile ? '100%' : '450px' }}>
          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '1.75rem', margin: '0 0 0.5rem 0', fontWeight: '700' }}>
              Sign up
            </h2>
            <p style={{ margin: 0, opacity: 0.6, fontSize: '0.95rem' }}>
              Already have an account? <a href="#login" style={{ color: '#0CC8A8', textDecoration: 'none' }}>Log in</a>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* First Name */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                First name*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="John"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: darkMode ? '#0F0F0F' : '#F9FAFB',
                  color: darkMode ? '#fff' : '#000',
                  border: '1px solid ' + (darkMode ? '#333' : '#E5E7EB'),
                  borderRadius: '0.375rem',
                  fontSize: '0.95rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Last Name */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Last name*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Doe"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: darkMode ? '#0F0F0F' : '#F9FAFB',
                  color: darkMode ? '#fff' : '#000',
                  border: '1px solid ' + (darkMode ? '#333' : '#E5E7EB'),
                  borderRadius: '0.375rem',
                  fontSize: '0.95rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Email address*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: darkMode ? '#0F0F0F' : '#F9FAFB',
                  color: darkMode ? '#fff' : '#000',
                  border: '1px solid ' + (darkMode ? '#333' : '#E5E7EB'),
                  borderRadius: '0.375rem',
                  fontSize: '0.95rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Password */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Password (8+ characters)*
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: darkMode ? '#0F0F0F' : '#F9FAFB',
                  color: darkMode ? '#fff' : '#000',
                  border: '1px solid ' + (darkMode ? '#333' : '#E5E7EB'),
                  borderRadius: '0.375rem',
                  fontSize: '0.95rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Terms Checkbox */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', margin: '0.5rem 0' }}>
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                style={{ marginTop: '0.25rem', cursor: 'pointer' }}
              />
              <label htmlFor="terms" style={{ fontSize: '0.875rem', opacity: 0.8, cursor: 'pointer', lineHeight: '1.4' }}>
                I agree to Aps's <a href="#terms" style={{ color: '#0CC8A8', textDecoration: 'none' }}>Terms & Conditions</a> and acknowledge the <a href="#privacy" style={{ color: '#0CC8A8', textDecoration: 'none' }}>Privacy Policy</a>
              </label>
            </div>

            {/* Create Account Button */}
            <div style={{ marginTop: '1rem' }}>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#0CC8A8',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.375rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0AB89D'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0CC8A8'}
              >
                Create account
              </button>
            </div>
          </form>

          {/* Divider */}
          <div style={{ margin: '1.5rem 0', textAlign: 'center', opacity: 0.5, fontSize: '0.875rem' }}>
            or continue with
          </div>

          {/* Social Login Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
            {/* Apple */}
            <button
              type="button"
              onClick={() => handleSocialLogin('Apple')}
              style={{
                padding: '0.75rem',
                backgroundColor: '#000000',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.875rem',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Apple
            </button>

            {/* Google */}
            <button
              type="button"
              onClick={() => handleSocialLogin('Google')}
              style={{
                padding: '0.75rem',
                backgroundColor: '#FFFFFF',
                color: '#000',
                border: '1px solid #D1D5DB',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.875rem',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#F9FAFB'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#FFFFFF'}
            >
              Google
            </button>

            {/* Meta */}
            <button
              type="button"
              onClick={() => handleSocialLogin('Meta')}
              style={{
                padding: '0.75rem',
                backgroundColor: '#1877F2',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.875rem',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Meta
            </button>
          </div>

          {/* Theme Toggle */}
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button
              type="button"
              onClick={toggleTheme}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: darkMode ? '#333' : '#F3F4F6',
                border: '1px solid ' + (darkMode ? '#555' : '#D1D5DB'),
                borderRadius: '0.375rem',
                cursor: 'pointer',
                fontSize: '1rem',
                color: darkMode ? '#fff' : '#000'
              }}
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;