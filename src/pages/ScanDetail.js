import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import useIsMobile from '../hooks/useIsMobile';
import { mockScanDetail, mockLogs, mockFindings, mockUser } from '../data/mockData';

const ScanDetail = ({ onBack, onNavigateToDashboard }) => {
    const { darkMode } = useContext(ThemeContext);
    const [activeTab, setActiveTab] = useState('scans');
    const [consoleTab, setConsoleTab] = useState('activity');
    const isMobile = useIsMobile();

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: darkMode ? '#0F0F0F' : '#F9FAFB',
            color: darkMode ? '#ffffff' : '#000000'
        }}>
            <Sidebar
                activeTab={activeTab}
                onTabChange={(tab) => {
                    setActiveTab(tab);
                    if (tab === 'dashboard') {
                        onNavigateToDashboard();
                    }
                    if (tab === 'scans') {
                        onBack();
                    }
                }}
                user={mockUser}
            />

            <div style={{ marginLeft: isMobile ? '0' : '240px' }}>
                <Header
                    title="Scan"
                    breadcrumb={[
                        { label: 'Private Assets', color: '#0CC8A8' },
                        { label: 'New Scan', color: '#0CC8A8' }
                    ]}
                    onExport={() => alert('Export Report clicked!')}
                    onStop={() => alert('Stop Scan clicked!')}
                />

                {/* Progress Section */}
                <div style={{
                    padding: isMobile ? '1.5rem' : '2rem',
                    backgroundColor: darkMode ? '#0F0F0F' : '#F9FAFB',
                    borderBottom: '1px solid ' + (darkMode ? '#333' : '#E5E7EB')
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '200px 1fr',
                        gap: isMobile ? '2rem' : '3rem',
                        alignItems: 'start'
                    }}>
                        {/* Progress Circle */}
                        <div style={{ display: 'flex', justifyContent: isMobile ? 'flex-start' : 'center' }}>
                            <div style={{
                                width: '180px',
                                height: '180px',
                                borderRadius: '50%',
                                backgroundColor: darkMode ? '#0F0F0F' : '#1A1A1A',
                                border: '8px solid #0CC8A8',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                flexShrink: 0
                            }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0CC8A8' }}>
                                    {mockScanDetail.progress}%
                                </div>
                                <div style={{ fontSize: '0.875rem', opacity: 0.7, color: '#0CC8A8' }}>
                                    In Progress
                                </div>
                            </div>
                        </div>

                        {/* Steps Tracker */}
                        <div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: '0.5rem',
                                marginBottom: '2rem',
                                alignItems: 'flex-start',
                                flexWrap: isMobile ? 'wrap' : 'nowrap'
                            }}>
                                {mockScanDetail.steps.map((step, index) => (
                                    <div key={index} style={{ flex: 1, position: 'relative', minWidth: isMobile ? '60px' : 'auto' }}>

                                        {index < mockScanDetail.steps.length - 1 && !isMobile && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '25px',
                                                left: '50%',
                                                right: '-50%',
                                                height: '2px',
                                                backgroundColor: index < mockScanDetail.activeStep ? '#0CC8A8' : (darkMode ? '#333' : '#D1D5DB'),
                                                zIndex: 0
                                            }} />
                                        )}

                                        {/* Circle */}
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            backgroundColor: index === mockScanDetail.activeStep ? '#0CC8A8' : (darkMode ? '#1A1A1A' : '#E5E7EB'),
                                            border: '2px solid ' + (index === mockScanDetail.activeStep ? '#0CC8A8' : (darkMode ? '#333' : '#D1D5DB')),
                                            margin: '0 auto 0.75rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: index === mockScanDetail.activeStep ? '#000' : (darkMode ? '#999' : '#666'),
                                            fontWeight: '600',
                                            position: 'relative',
                                            zIndex: 1
                                        }}>
                                            {index + 1}
                                        </div>

                                        {/* Label */}
                                        <div style={{ fontSize: isMobile ? '0.7rem' : '0.875rem', fontWeight: index === mockScanDetail.activeStep ? '600' : '400', textAlign: 'center' }}>
                                            {step}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Metadata */}
                            <div style={{
                                display: 'flex',
                                gap: isMobile ? '1.5rem' : '3rem',
                                marginTop: '2rem',
                                paddingTop: '1.5rem',
                                borderTop: '1px solid ' + (darkMode ? '#333' : '#E5E7EB'),
                                flexWrap: 'wrap',
                                fontSize: '0.85rem'
                            }}>
                                <div>
                                    <div style={{ fontSize: '0.7rem', opacity: 0.5, marginBottom: '0.35rem', fontWeight: '500' }}>Scan Type</div>
                                    <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{mockScanDetail.type}</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.7rem', opacity: 0.5, marginBottom: '0.35rem', fontWeight: '500' }}>Targets</div>
                                    <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{mockScanDetail.targets}</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.7rem', opacity: 0.5, marginBottom: '0.35rem', fontWeight: '500' }}>Started At</div>
                                    <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{mockScanDetail.startedAt}</div>
                                </div>
                                {!isMobile && (
                                    <>
                                        <div>
                                            <div style={{ fontSize: '0.7rem', opacity: 0.5, marginBottom: '0.35rem', fontWeight: '500' }}>Credentials</div>
                                            <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{mockScanDetail.credentials}</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.7rem', opacity: 0.5, marginBottom: '0.35rem', fontWeight: '500' }}>Files</div>
                                            <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{mockScanDetail.files}</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.7rem', opacity: 0.5, marginBottom: '0.35rem', fontWeight: '500' }}>Checklists</div>
                                            <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{mockScanDetail.checklists}</div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Console and Findings Section */}
                <div style={{
                    padding: isMobile ? '1rem' : '2rem',
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: isMobile ? '1rem' : '2rem'
                }}>
                    {/* Live Scan Console */}
                    <div style={{
                        backgroundColor: darkMode ? '#1A1A1A' : '#FFFFFF',
                        borderRadius: '0.5rem',
                        border: '1px solid ' + (darkMode ? '#333' : '#E5E7EB'),
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        maxHeight: '600px'
                    }}>
                        {/* Console Header */}
                        <div style={{
                            padding: '1rem',
                            borderBottom: '1px solid ' + (darkMode ? '#333' : '#E5E7EB'),
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <div style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: '#10B981'
                                }} />
                                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>
                                    Live Scan Console
                                </h3>
                            </div>
                            <div style={{
                                fontSize: '0.875rem',
                                padding: '0.25rem 0.75rem',
                                backgroundColor: darkMode ? '#0F0F0F' : '#F9FAFB',
                                borderRadius: '0.25rem',
                                opacity: 0.7
                            }}>
                                Running...
                            </div>
                        </div>

                        {/* Tabs */}
                        <div style={{
                            display: 'flex',
                            borderBottom: '1px solid ' + (darkMode ? '#333' : '#E5E7EB'),
                            backgroundColor: darkMode ? '#0F0F0F' : '#F9FAFB'
                        }}>
                            <button
                                onClick={() => setConsoleTab('activity')}
                                style={{
                                    flex: 1,
                                    padding: '1rem',
                                    backgroundColor: 'transparent',
                                    color: consoleTab === 'activity' ? '#0CC8A8' : (darkMode ? '#999' : '#666'),
                                    border: 'none',
                                    borderBottom: consoleTab === 'activity' ? '2px solid #0CC8A8' : 'none',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    transition: 'all 0.2s'
                                }}
                            >
                                Activity Log
                            </button>
                            <button
                                onClick={() => setConsoleTab('verification')}
                                style={{
                                    flex: 1,
                                    padding: '1rem',
                                    backgroundColor: 'transparent',
                                    color: consoleTab === 'verification' ? '#0CC8A8' : (darkMode ? '#999' : '#666'),
                                    border: 'none',
                                    borderBottom: consoleTab === 'verification' ? '2px solid #0CC8A8' : 'none',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    transition: 'all 0.2s'
                                }}
                            >
                                Verification Loops
                            </button>
                        </div>

                        {/* Console Content */}
                        <div style={{
                            flex: 1,
                            overflow: 'auto',
                            padding: '1.25rem',
                            fontFamily: 'monospace',
                            fontSize: '0.8rem',
                            lineHeight: '1.5'
                        }}>
                            {consoleTab === 'activity' ? (
                                <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                                    {mockLogs.map((log, index) => (
                                        <div key={index} style={{ marginBottom: '0.5rem' }}>
                                            <span style={{ color: '#0CC8A8' }}>[{log.time}]</span>
                                            <span style={{ marginLeft: '0.5rem', color: darkMode ? '#E5E7EB' : '#1F2937' }}>
                                                {log.message.split(' ').map((word, i) => {
                                                    const isHighlighted = log.highlights && log.highlights.some(h => word.includes(h));
                                                    return (
                                                        <span key={i} style={{
                                                            color: isHighlighted ? '#0CC8A8' : (darkMode ? '#E5E7EB' : '#1F2937'),
                                                            fontWeight: isHighlighted ? '600' : 'normal',
                                                            backgroundColor: isHighlighted ? 'rgba(12, 200, 168, 0.15)' : 'transparent',
                                                            padding: isHighlighted ? '0.1rem 0.3rem' : '0',
                                                            borderRadius: isHighlighted ? '0.2rem' : '0',
                                                            marginRight: '0.25rem'
                                                        }}>
                                                            {word}{i < log.message.split(' ').length - 1 ? ' ' : ''}
                                                        </span>
                                                    );
                                                })}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ opacity: 0.6, color: darkMode ? '#9CA3AF' : '#6B7280' }}>
                                    [Verification Loops Data]
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Finding Log */}
                    <div style={{
                        backgroundColor: darkMode ? '#1A1A1A' : '#FFFFFF',
                        borderRadius: '0.5rem',
                        border: '1px solid ' + (darkMode ? '#333' : '#E5E7EB'),
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        maxHeight: isMobile ? '400px' : '600px'
                    }}>
                        {/* Header */}
                        <div style={{
                            padding: '1rem',
                            borderBottom: '1px solid ' + (darkMode ? '#333' : '#E5E7EB')
                        }}>
                            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>
                                Finding Log
                            </h3>
                        </div>

                        {/* Findings List */}
                        <div style={{
                            flex: 1,
                            overflow: 'auto',
                            padding: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            {mockFindings.map((finding) => {
                                const severityColors = {
                                    Critical: '#EF4444',
                                    High: '#F97316',
                                    Medium: '#FBBF24'
                                };

                                return (
                                    <div key={finding.id} style={{
                                        padding: '1rem',
                                        backgroundColor: darkMode ? '#0F0F0F' : '#F9FAFB',
                                        borderRadius: '0.375rem',
                                        borderLeft: '4px solid ' + (severityColors[finding.severity] || '#999')
                                    }}>
                                        {/* Severity Badge and Time */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <span style={{
                                                display: 'inline-block',
                                                padding: '0.25rem 0.75rem',
                                                backgroundColor: severityColors[finding.severity] || '#999',
                                                color: 'white',
                                                borderRadius: '0.25rem',
                                                fontSize: '0.75rem',
                                                fontWeight: '600'
                                            }}>
                                                {finding.severity}
                                            </span>
                                            <span style={{ fontSize: '0.875rem', opacity: 0.6 }}>
                                                {finding.timestamp}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h4 style={{ margin: '0.5rem 0', fontSize: '0.95rem', fontWeight: '600' }}>
                                            {finding.title}
                                        </h4>

                                        {/* Endpoint */}
                                        <div style={{
                                            color: '#0CC8A8',
                                            fontSize: '0.875rem',
                                            fontFamily: 'monospace',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {finding.endpoint}
                                        </div>

                                        {/* Description */}
                                        <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.8, lineHeight: '1.4' }}>
                                            {finding.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Status Bar */}
                <div style={{
                    padding: isMobile ? '1rem' : '1rem 2rem',
                    backgroundColor: darkMode ? '#1A1A1A' : '#FFFFFF',
                    borderTop: '1px solid ' + (darkMode ? '#333' : '#E5E7EB'),
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    fontSize: isMobile ? '0.75rem' : '0.875rem',
                    gap: isMobile ? '1rem' : '0'
                }}>
                    <div style={{ display: 'flex', gap: isMobile ? '1rem' : '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <span style={{ opacity: 0.6 }}>Sub-agents: </span>
                            <strong>0</strong>
                        </div>
                        <div>
                            <span style={{ opacity: 0.6 }}>Parallel Executions: </span>
                            <strong>2</strong>
                        </div>
                        <div>
                            <span style={{ opacity: 0.6 }}>Operations: </span>
                            <strong>1</strong>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: isMobile ? '1rem' : '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <span style={{ color: '#EF4444', fontWeight: '600' }}>Critical: 0</span>
                        </div>
                        <div>
                            <span style={{ color: '#F97316', fontWeight: '600' }}>High: 0</span>
                        </div>
                        <div>
                            <span style={{ color: '#FBBF24', fontWeight: '600' }}>Medium: 0</span>
                        </div>
                        <div>
                            <span style={{ color: '#10B981', fontWeight: '600' }}>Low: 0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScanDetail;