import React from 'react';
import { Source } from '@/lib/types';
import { FileText } from 'lucide-react';

interface SourceCitationProps {
  source: Source;
  index: number;
  onClick: (source: Source) => void;
}

export const SourceCitation = ({ source, index, onClick }: SourceCitationProps) => {
  return (
    <button
      onClick={() => onClick(source)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 8px',
        borderRadius: '12px',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        color: 'var(--accent-primary)',
        fontSize: '11px',
        fontWeight: 500,
        margin: '0 4px',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
      }}
    >
      <FileText size={12} />
      <span>{source.documentTitle}</span>
      <span style={{ opacity: 0.6, fontSize: '10px', marginLeft: '2px' }}>[{index + 1}]</span>
    </button>
  );
};
