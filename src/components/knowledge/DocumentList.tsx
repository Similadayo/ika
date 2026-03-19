import React, { useState } from 'react';
import { DocumentItem } from './DocumentItem';
import { Document } from '@/lib/types';

export const DocumentList = ({ documents }: { documents: Document[] }) => {
  const [filter, setFilter] = useState<'All' | 'PDF' | 'DOC' | 'NOTION'>('All');

  const filteredDocs = documents.filter(doc => filter === 'All' || doc.type.toUpperCase() === filter);

  return (
    <div style={{ padding: '0 16px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', paddingLeft: '4px' }}>
        <div style={{ 
          fontSize: '11px', 
          fontWeight: 600, 
          color: 'var(--text-muted)', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
        }}>
          Indexed Knowledge
        </div>
      </div>

      <div style={{ display: 'flex', gap: '6px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {['All', 'PDF', 'DOC', 'NOTION'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            style={{
              padding: '4px 10px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: 500,
              backgroundColor: filter === f ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
              color: filter === f ? 'white' : 'var(--text-secondary)',
              border: `1px solid ${filter === f ? 'var(--accent-primary)' : 'var(--border-strong)'}`
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {filteredDocs.length > 0 ? (
          filteredDocs.map(doc => (
            <DocumentItem key={doc.id} doc={doc} />
          ))
        ) : (
          <div style={{ padding: '24px 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px' }}>
            No documents match this filter.
          </div>
        )}
      </div>
    </div>
  );
};
