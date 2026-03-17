import React from 'react';
import { ChatMessage, Source } from '@/lib/types';
import { SourceCitation } from './SourceCitation';
import { User, Server } from 'lucide-react';

interface MessageBubbleProps {
  message: ChatMessage;
  onSourceClick: (source: Source) => void;
}

export const MessageBubble = ({ message, onSourceClick }: MessageBubbleProps) => {
  const isUser = message.role === 'user';

  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      padding: '24px 0',
      borderBottom: isUser ? 'none' : '1px solid var(--border-subtle)',
      backgroundColor: isUser ? 'transparent' : 'rgba(255, 255, 255, 0.02)',
      animation: 'fadeIn 0.3s ease',
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        flexShrink: 0,
        backgroundColor: isUser ? 'var(--bg-surface-elevated)' : 'var(--accent-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isUser ? 'var(--text-secondary)' : 'white',
        border: isUser ? '1px solid var(--border-strong)' : 'none'
      }}>
        {isUser ? <User size={18} /> : <Server size={18} />}
      </div>
      
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '4px', color: 'var(--text-primary)' }}>
          {isUser ? 'You' : 'Knowledge Assistant'}
        </div>
        
        <div style={{ 
          fontSize: '15px', 
          lineHeight: 1.6, 
          color: isUser ? 'var(--text-primary)' : 'var(--text-secondary)',
          whiteSpace: 'pre-wrap'
        }}>
          {message.content}
        </div>

        {!isUser && message.sources && message.sources.length > 0 && (
          <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Sources:</span>
            {message.sources.map((source, idx) => (
              <SourceCitation 
                key={source.id} 
                source={source} 
                index={idx} 
                onClick={onSourceClick} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
