import { ChatResponse, Source } from './types';
import { mockDocuments } from './mock-data';

export const generateMockRagResponse = async (query: string): Promise<ChatResponse> => {
  // Simulate network & retrieval latency (1.5s - 3s)
  const delay = Math.floor(Math.random() * 1500) + 1500;
  await new Promise((resolve) => setTimeout(resolve, delay));

  const lowerQuery = query.toLowerCase();

  // Simple keyword matching for demo purposes
  if (lowerQuery.includes('onboarding')) {
    const doc = mockDocuments.find((d) => d.title.includes('Onboarding'));
    if (!doc) return fallbackResponse();

    const sources: Source[] = [
      {
        id: 'src-1',
        documentId: doc.id,
        documentTitle: doc.title,
        section: 'Phase 1: First Week Details',
        excerpt: 'New hires must complete IT setup by day 2 and shadow 3 sales calls by the end of week 1.',
        confidence: 0.95,
      },
      {
        id: 'src-2',
        documentId: mockDocuments.find((d) => d.title.includes('Handoff'))?.id || 'doc-3',
        documentTitle: 'Client Handoff Process',
        section: 'Introduction to Client Services',
        excerpt: 'Account managers should be introduced during the onboarding phase to ensure smooth transition.',
        confidence: 0.82,
      }
    ];

    return {
      answer: "Based on the Sales Onboarding SOP and Client Handoff Process, new hires need to first complete their IT setup by Day 2. Over their first week, they are required to shadow at least 3 sales calls. Additionally, the handoff process notes that Account Managers should be introduced to the client during this initial onboarding phase to ensure a seamless transition.",
      sources,
    };
  }

  if (lowerQuery.includes('vendor') || lowerQuery.includes('contract')) {
    const doc = mockDocuments.find((d) => d.title.includes('Vendor'));
    if (!doc) return fallbackResponse();

    const sources: Source[] = [
      {
        id: 'src-3',
        documentId: doc.id,
        documentTitle: doc.title,
        section: 'Section 4: Approval Workflows',
        excerpt: 'All vendor contracts exceeding $10,000 must be reviewed by the Legal team and signed off by the VP of Finance.',
        confidence: 0.98,
      }
    ];

    return {
      answer: "For vendor contracts, the requirements depend on the monetary value. According to Section 4 of our Vendor Contract Requirements, any contract exceeding $10,000 must go through a formal review by the Legal team and ultimately requires sign-off from the VP of Finance.",
      sources,
    };
  }

  if (lowerQuery.includes('pricing') || lowerQuery.includes('exceptions')) {
    const doc = mockDocuments.find((d) => d.title.includes('Pricing'));
    if (!doc) return fallbackResponse();

    const sources: Source[] = [
      {
        id: 'src-4',
        documentId: doc.id,
        documentTitle: doc.title,
        section: 'Row 42: Enterprise Exceptions',
        excerpt: 'Price matching or discounts greater than 15% on enterprise tiers require Deal Desk approval.',
        confidence: 0.88,
      }
    ];

    return {
      answer: "I found guidance in the Enterprise Pricing Tiers document. For enterprise tier pricing, any exceptions such as price matching or discounts that exceed 15% strictly require approval from the Deal Desk before the quote can be sent.",
      sources,
    };
  }

  // Fallback realistic response when no direct match is found
  return fallbackResponse();
};

function fallbackResponse(): ChatResponse {
  const doc = mockDocuments[0];
  const sources: Source[] = [
    {
       id: 'src-fb-1',
       documentId: doc.id,
       documentTitle: doc.title,
       section: 'General Index',
       excerpt: 'This document acts as the master record for team processes.',
       confidence: 0.45,
    }
  ];

  return {
    answer: "I couldn't find a highly specific answer to that query in our indexed documents, but I found related context in the Sales Onboarding SOP. Could you provide a bit more detail on what you're looking for, or specify a particular document?",
    sources,
  };
}
