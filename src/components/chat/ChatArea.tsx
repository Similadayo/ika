'use client';

import React, { useState } from 'react';
import { generateMockRagResponse } from '@/lib/mock-rag';
import { ChatMessage, Source } from '@/lib/types';
import { AppShell } from '../layout/AppShell';
import { Sidebar } from '../layout/Sidebar';
import { SourcePreviewPanel } from '../layout/SourcePreviewPanel';
import { MessageBubble } from './MessageBubble';
import { ChatInput } from './ChatInput';
import { TypingIndicator } from './TypingIndicator';
import { SuggestedPrompts } from './SuggestedPrompts';

export const ChatArea = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeSource, setActiveSource] = useState<Source | null>(null);

  const handleSend = async (content: string) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      createdAt: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Call mock API logic directly from the client for this demo
    const response = await generateMockRagResponse(content);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response.answer,
      sources: response.sources,
      createdAt: new Date()
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsTyping(false);
  };

  const handleSourceClick = (source: Source) => {
    setActiveSource(source);
  };

  return (
    <AppShell 
      sidebar={<Sidebar />}
      chatActive={activeSource ? <SourcePreviewPanel source={activeSource} onClose={() => setActiveSource(null)} /> : null}
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        
        {messages.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SuggestedPrompts onSelect={handleSend} />
          </div>
        ) : (
          <div style={{ flex: 1, overflowY: 'auto', padding: '0 24px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '24px' }}>
              {messages.map(msg => (
                <MessageBubble key={msg.id} message={msg} onSourceClick={handleSourceClick} />
              ))}
              {isTyping && (
                <div style={{ padding: '24px 0' }}>
                  <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '8px', color: 'var(--text-primary)' }}>Knowledge Assistant</div>
                  <TypingIndicator />
                </div>
              )}
            </div>
          </div>
        )}

        <div style={{ flexShrink: 0 }}>
          <ChatInput onSend={handleSend} disabled={isTyping} />
        </div>
      </div>
    </AppShell>
  );
};
