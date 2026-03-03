import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import OrgInfoBar from '../components/OrgInfoBar';
import DashboardToolbar from '../components/DashBoardToolbar';
import SeverityCard from '../components/SeverityCard';
import ProgressBar from '../components/ProgressBar';
import Chip from '../components/Chip';
import Badge from '../components/Badge';
import useIsMobile from '../hooks/useIsMobile';
import { mockScans, mockStats, mockOrgInfo, mockUser } from '../data/mockData';

const Dashboard = ({ onScanClick }) => {
    const { darkMode } = useContext(ThemeContext);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [searchTerm, setSearchTerm] = useState('');
    const isMobile = useIsMobile();

    const filteredScans = mockScans.filter(scan =>
        scan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scan.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleNewScan = () => {
        alert('New Scan clicked!');
    };

    const handleExportReport = () => {
        alert('Export Report clicked!');
    };

    const handleStopScan = () => {
        alert('Stop Scan clicked!');
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: darkMode ? '#0F0F0F' : '#F9FAFB',
                color: darkMode ? '#ffffff' : '#000000'
            }}
        >
            <Sidebar
                activeTab={activeTab}
                onTabChange={(tab) => {
                    setActiveTab(tab);
                    if (tab === 'scans') {
                        onScanClick(1);
                    }
                }}
                user={mockUser}
            />

            <div style={{ marginLeft: isMobile ? '0' : '240px' }}>
                <Header
                    title="Dashboard"
                    breadcrumb={[]}
                    onExport={() => alert('Export Report clicked!')}
                    onStop={() => alert('Stop Scan clicked!')}
                />
                <OrgInfoBar orgInfo={mockOrgInfo} />

                {/* Severity Stats */}
                <div
                    style={{
                        padding: isMobile ? '1rem' : '1.5rem 2rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '1rem',
                        backgroundColor: darkMode ? '#0F0F0F' : '#F9FAFB'
                    }}
                >
                    <SeverityCard
                        severity="Critical"
                        count={mockStats.critical.count}
                        change={mockStats.critical.change}
                        trend={mockStats.critical.trend}
                        icon="🔴"
                    />
                    <SeverityCard
                        severity="High"
                        count={mockStats.high.count}
                        change={mockStats.high.change}
                        trend={mockStats.high.trend}
                        icon="🟠"
                    />
                    <SeverityCard
                        severity="Medium"
                        count={mockStats.medium.count}
                        change={mockStats.medium.change}
                        trend={mockStats.medium.trend}
                        icon="🟡"
                    />
                    <SeverityCard
                        severity="Low"
                        count={mockStats.low.count}
                        change={mockStats.low.change}
                        trend={mockStats.low.trend}
                        icon="🟢"
                    />
                </div>

                {/* Toolbar */}
                <DashboardToolbar
                    onSearch={setSearchTerm}
                    onFilter={() => alert('Filter clicked!')}
                    onNewScan={handleNewScan}
                />

                {/* Scans Table */}
                <div
                    style={{
                        padding: isMobile ? '1rem' : '0 2rem 2rem',
                        overflowX: 'auto'
                    }}
                >
                    <table
                        style={{
                            width: '100%',
                            minWidth: '900px',
                            borderCollapse: 'collapse',
                            backgroundColor: darkMode ? '#1A1A1A' : '#FFFFFF',
                            borderRadius: '0.5rem',
                            overflow: 'hidden',
                            border: `1px solid ${darkMode ? '#333' : '#E5E7EB'}`
                        }}
                    >
                        <thead>
                            <tr
                                style={{
                                    borderBottom: `1px solid ${darkMode ? '#333' : '#E5E7EB'}`,
                                    backgroundColor: darkMode ? '#0F0F0F' : '#F9FAFB'
                                }}
                            >
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>Scan Name</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>Type</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>Status</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>Progress</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>Vulnerability</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', fontSize: '0.875rem' }}>Last Scan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredScans.map((scan) => (
                                <tr
                                    key={scan.id}
                                    onClick={() => onScanClick(scan.id)}
                                    style={{
                                        borderBottom: `1px solid ${darkMode ? '#333' : '#E5E7EB'}`,
                                        cursor: 'pointer',
                                        backgroundColor: darkMode ? '#1A1A1A' : '#FFFFFF',
                                        transition: 'background-color 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkMode ? '#252525' : '#F9FAFB'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = darkMode ? '#1A1A1A' : '#FFFFFF'}
                                >
                                    <td style={{ padding: '1rem', fontWeight: '500' }}>{scan.name}</td>
                                    <td style={{ padding: '1rem' }}>{scan.type}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <Chip status={scan.status} />
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <div style={{ flex: 1, minWidth: '100px' }}>
                                                <ProgressBar progress={scan.progress} />
                                            </div>
                                            <span style={{ fontSize: '0.875rem', minWidth: '40px' }}>{scan.progress}%</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', gap: '0.25rem' }}>
                                            <Badge severity="critical" count={scan.vulnerabilities.critical} />
                                            <Badge severity="high" count={scan.vulnerabilities.high} />
                                            <Badge severity="medium" count={scan.vulnerabilities.medium} />
                                            <Badge severity="low" count={scan.vulnerabilities.low} />
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem' }}>{scan.lastScan}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;