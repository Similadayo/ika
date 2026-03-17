import React from 'react';
import { Server, CheckCircle2 } from 'lucide-react';
import { mockDocuments } from '@/lib/mock-data';

export const TopBar = () => {
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
          <h1 style={{ fontSize: '16px', margin: 0, color: 'var(--text-primary)' }}>Acme Ops Knowledge Assistant</h1>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>{mockDocuments.length} indexed documents</span>
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
