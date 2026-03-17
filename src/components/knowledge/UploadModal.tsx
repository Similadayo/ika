'use client';

import React, { useState } from 'react';
import { X, UploadCloud, Loader2 } from 'lucide-react';

export const UploadModal = ({ onClose, onComplete }: { onClose: () => void, onComplete: () => void }) => {
  const [state, setState] = useState<'idle' | 'uploading' | 'indexing' | 'done'>('idle');

  const handleSimulatedUpload = () => {
    setState('uploading');
    
    setTimeout(() => {
      setState('indexing');
      setTimeout(() => {
        setState('done');
        setTimeout(() => {
          onComplete();
        }, 1000);
      }, 2000);
    }, 1500);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
    }}>
      <div className="glass-panel animate-fade-in" style={{
        width: '400px',
        borderRadius: '12px',
        padding: '24px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', color: 'var(--text-muted)' }}
        >
          <X size={20} />
        </button>

        <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>Add Knowledge</h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Upload SOPs, proposals, or meeting notes to the workspace.
        </p>

        {state === 'idle' && (
          <div 
            onClick={handleSimulatedUpload}
            style={{
              border: '2px dashed var(--border-strong)',
              borderRadius: '8px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s',
              backgroundColor: 'rgba(255,255,255,0.02)'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'}
          >
            <UploadCloud size={32} color="var(--accent-primary)" style={{ marginBottom: '12px' }} />
            <span style={{ fontSize: '14px', fontWeight: 500 }}>Click or drag file to upload</span>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>PDF, DOCX, Notion Export (max 50MB)</span>
          </div>
        )}

        {state === 'uploading' && (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <Loader2 size={32} color="var(--accent-primary)" className="anim-spin" style={{ margin: '0 auto 16px', animation: 'spin 1s linear infinite' }} />
            <span style={{ fontSize: '14px' }}>Uploading "Q2_Marketing_Plan.pdf"...</span>
            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {state === 'indexing' && (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <Loader2 size={32} color="var(--status-warning)" style={{ margin: '0 auto 16px', animation: 'spin 1s linear infinite' }} />
            <span style={{ fontSize: '14px' }}>Extracting text and generating embeddings...</span>
          </div>
        )}

        {state === 'done' && (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <div style={{ 
              width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.2)', 
              color: 'var(--status-success)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <CheckCircle2 size={24} />
            </div>
            <span style={{ fontSize: '14px', fontWeight: 500 }}>Document Indexed Successfully</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Re-importing CheckCircle2 for the done state locally since we needed it
import { CheckCircle2 } from 'lucide-react';
