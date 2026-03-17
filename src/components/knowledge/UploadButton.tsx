import React from 'react';
import { Plus } from 'lucide-react';

export const UploadButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: 'calc(100% - 32px)',
        margin: '16px',
        padding: '10px 16px',
        borderRadius: '8px',
        backgroundColor: 'var(--bg-surface-elevated)',
        border: '1px solid var(--border-strong)',
        color: 'var(--text-primary)',
        fontSize: '13px',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = 'var(--text-primary)';
        e.currentTarget.style.color = 'var(--bg-base)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = 'var(--bg-surface-elevated)';
        e.currentTarget.style.color = 'var(--text-primary)';
      }}
    >
      <Plus size={16} />
      Add Document
    </button>
  );
};
