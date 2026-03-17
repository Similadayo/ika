import React from 'react';
import { DocumentItem } from './DocumentItem';
import { Document } from '@/lib/types';

export const DocumentList = ({ documents }: { documents: Document[] }) => {
  return (
    <div style={{ padding: '0 16px', overflowY: 'auto', flex: 1 }}>
      <div style={{ 
        fontSize: '11px', 
        fontWeight: 600, 
        color: 'var(--text-muted)', 
        textTransform: 'uppercase', 
        letterSpacing: '0.05em',
        marginBottom: '12px',
        paddingLeft: '4px'
      }}>
        Indexed Knowledge
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {documents.map(doc => (
          <DocumentItem key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
};
