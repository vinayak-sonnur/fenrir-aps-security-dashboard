import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ScanDetail from './pages/ScanDetail';
import './index.css';

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedScanId, setSelectedScanId] = useState(null);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleScanClick = (scanId) => {
    setSelectedScanId(scanId);
    setCurrentPage('scanDetail');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
    setSelectedScanId(null);
  };

  const handleNavigateToDashboard = () => {
    setCurrentPage('dashboard');
    setSelectedScanId(null);
  };

  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  if (currentPage === 'scanDetail' && selectedScanId) {
    return (
      <ScanDetail 
        onBack={handleBackToDashboard}
        onNavigateToDashboard={handleNavigateToDashboard}
      />
    );
  }

  return (
    <Dashboard 
      onScanClick={handleScanClick}
      onNavigateToDashboard={handleNavigateToDashboard}
    />
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;