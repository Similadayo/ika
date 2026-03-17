import React from 'react';
import { FileText, File, FileSpreadsheet, FileJson } from 'lucide-react';
import { Document } from '@/lib/types';

const getIcon = (type: Document['type']) => {
  switch (type) {
    case 'pdf': return <FileText size={16} color="#ef4444" />;
    case 'doc': return <File size={16} color="#3b82f6" />;
    case 'sheet': return <FileSpreadsheet size={16} color="#10b981" />;
    case 'notion': return <FileJson size={16} color="#f59e0b" />;
    default: return <File size={16} color="#9ca3af" />;
  }
};

export const DocumentItem = ({ doc }: { doc: Document }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      padding: '12px',
      borderRadius: '8px',
      backgroundColor: 'var(--bg-surface-elevated)',
      border: '1px solid var(--border-subtle)',
      cursor: 'pointer',
      transition: 'all 0.2s',
      marginBottom: '8px',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = 'var(--bg-surface-elevated)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    }}
    >
      <div style={{
        padding: '8px',
        backgroundColor: 'var(--bg-base)',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {getIcon(doc.type)}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4 style={{ 
          fontSize: '13px', 
          margin: '0 0 4px 0', 
          color: 'var(--text-primary)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {doc.title}
        </h4>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px', 
          fontSize: '11px', 
          color: 'var(--text-muted)' 
        }}>
          <span style={{ textTransform: 'uppercase', fontWeight: 500 }}>{doc.type}</span>
          <span>•</span>
          <span>{doc.owner}</span>
        </div>
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
          Updated {doc.updatedAt}
        </div>
      </div>
    </div>
  );
};
