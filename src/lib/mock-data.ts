import { Document, Source, Workspace, Conversation } from './types';

export const mockWorkspaces: Workspace[] = [
  { id: 'ws-1', name: 'Acme Ops', documentCount: 6 },
  { id: 'ws-2', name: 'Acme Sales', documentCount: 14 },
  { id: 'ws-3', name: 'Engineering', documentCount: 42 },
];

export const mockConversations: Conversation[] = [
  { id: 'conv-1', title: 'Q1 Onboarding requirements', updatedAt: '2 hours ago' },
  { id: 'conv-2', title: 'Vendor contract limits', updatedAt: 'Yesterday' },
  { id: 'conv-3', title: 'Client handoff notes', updatedAt: '3 days ago' },
];

export const mockDocuments: Document[] = [
  {
    id: 'doc-1',
    title: 'Sales Onboarding SOP',
    type: 'pdf',
    updatedAt: '3 days ago',
    owner: 'Enablement Team',
    tags: ['Sales', 'Onboarding', 'SOP'],
  },
  {
    id: 'doc-2',
    title: 'Agency Proposal Template 2024',
    type: 'doc',
    updatedAt: '1 week ago',
    owner: 'Biz Dev',
    tags: ['Template', 'Proposals'],
  },
  {
    id: 'doc-3',
    title: 'Client Handoff Process',
    type: 'notion',
    updatedAt: '2 weeks ago',
    owner: 'Ops',
    tags: ['Process', 'Client Success'],
  },
  {
    id: 'doc-4',
    title: 'Enterprise Pricing Tiers',
    type: 'sheet',
    updatedAt: '1 month ago',
    owner: 'Finance',
    tags: ['Pricing', 'Enterprise'],
  },
  {
    id: 'doc-5',
    title: 'Vendor Contract Requirements',
    type: 'pdf',
    updatedAt: '2 months ago',
    owner: 'Legal',
    tags: ['Legal', 'Vendor'],
  },
  {
    id: 'doc-6',
    title: 'Q1 Sales Playbook',
    type: 'notion',
    updatedAt: '3 days ago',
    owner: 'Sales Leadership',
    tags: ['Playbook', 'Q1'],
  },
];

export const starterPrompts = [
  "What is our onboarding process for new clients?",
  "Summarize the Q1 sales playbook.",
  "Are there conflicting rules on PTO carryover?",
  "What is the wifi password for the Austin office?",
];
