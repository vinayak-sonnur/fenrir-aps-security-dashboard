import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const OrgInfoBar = ({ orgInfo }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        marginLeft: '240px',
        padding: '1rem 2rem',
        backgroundColor: darkMode ? '#1A1A1A' : '#FFFFFF',
        borderBottom: `1px solid ${darkMode ? '#333' : '#E5E7EB'}`,
        fontSize: '0.875rem',
        opacity: 0.8,
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}
    >
      <div>
        <span style={{ opacity: 0.6 }}>Org: </span>
        <strong>{orgInfo.org}</strong>
      </div>
      <div>
        <span style={{ opacity: 0.6 }}>Owner: </span>
        <strong>{orgInfo.owner}</strong>
      </div>
      <div>
        <span style={{ opacity: 0.6 }}>Total Scans: </span>
        <strong>{orgInfo.totalScans}</strong>
      </div>
      <div>
        <span style={{ opacity: 0.6 }}>Scheduled: </span>
        <strong>{orgInfo.scheduled}</strong>
      </div>
      <div>
        <span style={{ opacity: 0.6 }}>Rescans: </span>
        <strong>{orgInfo.rescans}</strong>
      </div>
      <div>
        <span style={{ opacity: 0.6 }}>Failed Scans: </span>
        <strong>{orgInfo.failedScans}</strong>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        ⏱️ {orgInfo.lastUpdate}
      </div>
    </div>
  );
};

export default OrgInfoBar;