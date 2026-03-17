import { Document, Source } from './types';

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
  "What are the approval steps for vendor contracts?",
  "Find guidance on enterprise pricing exceptions.",
];
