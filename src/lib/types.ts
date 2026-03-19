export type DocumentType = 'pdf' | 'doc' | 'notion' | 'sheet';

export type Workspace = {
  id: string;
  name: string;
  documentCount: number;
};

export type Conversation = {
  id: string;
  title: string;
  updatedAt: string;
};
export type Document = {
  id: string;
  title: string;
  type: DocumentType;
  updatedAt: string;
  owner: string;
  tags: string[];
};

export type Source = {
  id: string;
  documentId: string;
  documentTitle: string;
  section: string;
  excerpt: string;
  confidence?: number;
};

export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
  createdAt: Date;
};

export type ChatResponse = {
  answer: string;
  sources: Source[];
};
