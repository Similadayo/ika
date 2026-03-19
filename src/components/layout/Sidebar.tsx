import React, { useState } from 'react';
import { MessageSquareText } from 'lucide-react';
import { DocumentList } from '../knowledge/DocumentList';
import { UploadButton } from '../knowledge/UploadButton';
import { UploadModal } from '../knowledge/UploadModal';
import { mockDocuments as initialDocs, mockConversations } from '@/lib/mock-data';
import { Document } from '@/lib/types';

export const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documents, setDocuments] = useState<Document[]>(initialDocs);

  const handleUploadComplete = () => {
    setIsModalOpen(false);
    // Add a mocked new document
    const newDoc: Document = {
      id: `doc-${Date.now()}`,
      title: 'Q2 Marketing Plan',
      type: 'pdf',
      updatedAt: 'Just now',
      owner: 'Marketing',
      tags: ['Q2', 'Plan'],
    };
    setDocuments([newDoc, ...documents]);
  };

  return (
    <>
      {/* Header matching topbar height or independent */}
      <div style={{
        padding: '24px 16px 12px 16px',
      }}>
        <h2 style={{ fontSize: '18px', color: 'var(--text-primary)', margin: 0 }}>Knowledge Base</h2>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>Manage indexed team assets</p>
      </div>

      <UploadButton onClick={() => setIsModalOpen(true)} />
      
      <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)', margin: '8px 16px 16px 16px' }} />
      
      {/* Scrollable Container for both history and documents */}
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        
        {/* Recent Conversations */}
        <div style={{ padding: '0 16px', marginBottom: '24px' }}>
          <div style={{ 
            fontSize: '11px', 
            fontWeight: 600, 
            color: 'var(--text-muted)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.05em',
            marginBottom: '12px',
            paddingLeft: '4px'
          }}>
            Recent Chats
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {mockConversations.map(conv => (
              <button
                key={conv.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-surface-elevated)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <MessageSquareText size={14} />
                <span style={{ 
                  flex: 1, 
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis' 
                }}>
                  {conv.title}
                </span>
                <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{conv.updatedAt}</span>
              </button>
            ))}
          </div>
        </div>

        <DocumentList documents={documents} />
      </div>

      {isModalOpen && (
        <UploadModal 
          onClose={() => setIsModalOpen(false)} 
          onComplete={handleUploadComplete} 
        />
      )}
    </>
  );
};
