'use client';

import React, { useState } from 'react';
import { DocumentList } from '../knowledge/DocumentList';
import { UploadButton } from '../knowledge/UploadButton';
import { UploadModal } from '../knowledge/UploadModal';
import { mockDocuments as initialDocs } from '@/lib/mock-data';
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
      
      <DocumentList documents={documents} />

      {isModalOpen && (
        <UploadModal 
          onClose={() => setIsModalOpen(false)} 
          onComplete={handleUploadComplete} 
        />
      )}
    </>
  );
};
