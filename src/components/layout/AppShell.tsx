import React from 'react';
import { TopBar } from './TopBar';

export const AppShell = ({ sidebar, chatActive, children }: { sidebar: React.ReactNode; chatActive: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Sidebar Area */}
      <div style={{
        width: 'var(--sidebar-width)',
        backgroundColor: 'var(--bg-surface)',
        borderRight: '1px solid var(--border-strong)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10
      }}>
        {sidebar}
      </div>

      {/* Main Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <TopBar />
        <main style={{ flex: 1, position: 'relative', overflowY: 'auto' }}>
          {children}
        </main>
        {chatActive}
      </div>
    </div>
  );
};
