import React from 'react';
import { starterPrompts } from '@/lib/mock-data';
import { MessageSquare } from 'lucide-react';

export const SuggestedPrompts = ({ onSelect }: { onSelect: (prompt: string) => void }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', animation: 'fadeIn 0.5s ease', marginTop: 'auto', paddingBottom: '32px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--text-primary)' }}>Ask your company knowledge anything</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '400px', lineHeight: 1.6 }}>
          Source-backed answers from indexed internal documents, policies, notes, and playbooks.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', width: '100%', maxWidth: '700px' }}>
        {starterPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(prompt)}
            style={{
              padding: '16px',
              backgroundColor: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)';
              e.currentTarget.style.borderColor = 'var(--border-strong)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'var(--bg-surface-elevated)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <MessageSquare size={16} color="var(--accent-primary)" />
            <span style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.4 }}>{prompt}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
