import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

const DashboardToolbar = ({ onSearch, onFilter, onNewScan }) => {
  const { darkMode } = useContext(ThemeContext);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div
      style={{
        marginLeft: '240px',
        padding: '1.5rem 2rem',
        backgroundColor: darkMode ? '#0F0F0F' : '#F9FAFB',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}
    >
      {/*Search Input*/} 
      <div style={{ flex: 1 }}>
        <input
          type="text"
          placeholder="Search scans by name or type..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            onSearch(e.target.value);
          }}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            backgroundColor: darkMode ? '#1A1A1A' : '#FFFFFF',
            color: darkMode ? '#fff' : '#000',
            border: `1px solid ${darkMode ? '#333' : '#D1D5DB'}`,
            borderRadius: '0.375rem',
            fontSize: '0.95rem'
          }}
        />
      </div>

      {/* Filter Button */}
      <Button 
        onClick={onFilter}
        variant="secondary"
        size="md"
      >
        ⚙️ Filter
      </Button>

      {/* Column Button */}
      <Button 
        onClick={onFilter}
        variant="secondary"
        size="md"
      >
        📋 Column
      </Button>

      {/* New Scan Button */}
      <Button 
        onClick={onNewScan}
        variant="primary"
        size="md"
      >
        ➕ New scan
      </Button>
    </div>
  );
};

export default DashboardToolbar;