import React, { useState } from 'react';
import { Server, CheckCircle2, ChevronDown } from 'lucide-react';
import { mockDocuments, mockWorkspaces } from '@/lib/mock-data';

export const TopBar = () => {
  const [activeWorkspace, setActiveWorkspace] = useState(mockWorkspaces[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header style={{
      height: 'var(--topbar-height)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(10, 10, 11, 0.8)',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          backgroundColor: 'var(--accent-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}>
          <Server size={18} />
        </div>
        <div>
          <div 
            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', position: 'relative' }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <h1 style={{ fontSize: '16px', margin: 0, color: 'var(--text-primary)' }}>{activeWorkspace.name} Knowledge Assistant</h1>
            <ChevronDown size={14} color="var(--text-muted)" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            
            {isDropdownOpen && (
              <div 
                className="glass-panel animate-fade-in"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  marginTop: '12px',
                  width: '240px',
                  borderRadius: '12px',
                  padding: '8px',
                  zIndex: 50,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', padding: '8px', textTransform: 'uppercase' }}>Switch Workspace</div>
                {mockWorkspaces.map(ws => (
                  <button
                    key={ws.id}
                    onClick={() => { setActiveWorkspace(ws); setIsDropdownOpen(false); }}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      color: activeWorkspace.id === ws.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                      backgroundColor: activeWorkspace.id === ws.id ? 'var(--bg-surface-elevated)' : 'transparent',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = activeWorkspace.id === ws.id ? 'var(--bg-surface-elevated)' : 'transparent'}
                  >
                    {ws.name}
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{ws.documentCount} docs</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>{activeWorkspace.documentCount} indexed documents</span>
            <span style={{ fontSize: '10px' }}>•</span>
            <span style={{ color: 'var(--status-success)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={12} /> Sources Enabled
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
