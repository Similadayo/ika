import React from 'react';

export const TypingIndicator = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '12px 16px', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: '12px', width: 'fit-content' }}>
      <div className="typing-dot" style={{ width: '6px', height: '6px', backgroundColor: 'var(--text-secondary)', borderRadius: '50%' }} />
      <div className="typing-dot" style={{ width: '6px', height: '6px', backgroundColor: 'var(--text-secondary)', borderRadius: '50%', animationDelay: '0.2s' }} />
      <div className="typing-dot" style={{ width: '6px', height: '6px', backgroundColor: 'var(--text-secondary)', borderRadius: '50%', animationDelay: '0.4s' }} />
      <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginLeft: '8px' }}>Searching indexed knowledge...</span>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .typing-dot { animation: bounce 1s infinite; }
      `}</style>
    </div>
  );
};
