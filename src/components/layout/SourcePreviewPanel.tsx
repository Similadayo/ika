import React from 'react';
import { Source } from '@/lib/types';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';

export const SourcePreviewPanel = ({ source, onClose }: { source: Source, onClose: () => void }) => {
  if (!source) return null;

  return (
    <div className="animate-fade-in" style={{
      width: '360px',
      backgroundColor: 'var(--bg-surface)',
      borderLeft: '1px solid var(--border-strong)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '-4px 0 24px rgba(0,0,0,0.2)',
      zIndex: 10,
    }}>
      <div style={{
        padding: '20px',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '6px' }}>Source Preview</div>
          <h3 style={{ fontSize: '16px', margin: 0, color: 'var(--text-primary)', lineHeight: 1.3 }}>{source.documentTitle}</h3>
        </div>
        <button onClick={onClose} style={{ color: 'var(--text-muted)', padding: '4px' }}>
          <X size={20} />
        </button>
      </div>

      <div style={{ padding: '24px 20px', flex: 1, overflowY: 'auto' }}>
        <div style={{
          backgroundColor: 'rgba(16, 185, 129, 0.05)',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          borderRadius: '8px',
          padding: '12px',
          marginBottom: '24px',
          display: 'flex',
          gap: '8px'
        }}>
          <ShieldCheck size={18} color="var(--status-success)" style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '4px' }}>Verified Internal Source</div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              Confidence Match: {(source.confidence || 0.95) * 100}%
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 500 }}>MATCHED SECTION</div>
          <div style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>{source.section}</div>
        </div>

        <div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 500 }}>EXCERPT</div>
          <div style={{
            margin: 0,
            padding: '16px',
            backgroundColor: 'var(--bg-surface-elevated)',
            borderRadius: '8px',
            borderLeft: '4px solid var(--accent-primary)',
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--text-secondary)'
          }}>
            "{source.excerpt}"
          </div>
        </div>
      </div>

      <div style={{ padding: '20px', borderTop: '1px solid var(--border-subtle)' }}>
        <button style={{
          width: '100%',
          padding: '10px',
          backgroundColor: 'var(--bg-surface-elevated)',
          border: '1px solid var(--border-strong)',
          borderRadius: '8px',
          color: 'var(--text-primary)',
          fontSize: '13px',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <ExternalLink size={16} /> Open Full Document
        </button>
      </div>
    </div>
  );
};
