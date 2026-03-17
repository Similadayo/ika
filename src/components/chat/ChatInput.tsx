'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const ChatInput = ({ onSend, disabled }: { onSend: (text: string) => void, disabled?: boolean }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !disabled) {
      onSend(text.trim());
      setText('');
    }
  };

  return (
    <div style={{
      padding: '24px',
      backgroundColor: 'transparent',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        <form 
          onSubmit={handleSubmit}
          className="glass-panel"
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
            border: '1px solid var(--border-strong)',
            transition: 'border-color 0.2s',
          }}
          onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
          onBlur={e => e.currentTarget.style.borderColor = 'var(--border-strong)'}
        >
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            disabled={disabled}
            placeholder="Ask a question about your internal docs..."
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: '15px',
              padding: '8px 0',
            }}
          />
          <button
            type="submit"
            disabled={!text.trim() || disabled}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: text.trim() ? 'var(--accent-primary)' : 'var(--bg-surface)',
              color: text.trim() ? 'white' : 'var(--text-muted)',
              border: 'none',
              cursor: text.trim() && !disabled ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s'
            }}
          >
            <Send size={16} />
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '11px', color: 'var(--text-muted)' }}>
          AI responses must be verified. Source transparency ensures accuracy.
        </div>
      </div>
    </div>
  );
};
