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

  // Edge Case 1: Conflicting Information
  if (lowerQuery.includes('pto') || lowerQuery.includes('conflicting')) {
    const doc1 = mockDocuments.find(d => d.title.includes('SOP')) || mockDocuments[0];
    const doc2 = mockDocuments.find(d => d.title.includes('Playbook')) || mockDocuments[1];

    const sources: Source[] = [
      {
        id: 'src-conf-1',
        documentId: doc1.id,
        documentTitle: '2023 Employee Handbook',
        section: 'Section 3: Time Off',
        excerpt: 'Employees may carry over a maximum of 5 unused PTO days into the next calendar year.',
        confidence: 0.92,
      },
      {
        id: 'src-conf-2',
        documentId: doc2.id,
        documentTitle: '2024 HR Policy Updates',
        section: 'PTO Policy Changes',
        excerpt: 'Effective Jan 1, 2024, PTO carryover is no longer permitted. All unused time will be paid out.',
        confidence: 0.99,
      }
    ];

    return {
      answer: "I found conflicting information regarding PTO carryover in our records. \n\nThe older '2023 Employee Handbook' states that up to 5 days can be carried over. However, the more recent '2024 HR Policy Updates' explicitly states that PTO carryover is no longer permitted and unused time is paid out instead. \n\nGiven the dates, the 2024 policy likely supersedes the older handbook, but you may want to verify with HR.",
      sources,
    };
  }

  // Edge Case 2: No Information Found (e.g. Wifi Password)
  if (lowerQuery.includes('wifi') || lowerQuery.includes('austin')) {
    return {
      answer: "I've searched through the indexed documents (SOPs, playbooks, client notes, etc.) but I couldn't find any mention of the wifi password for the Austin office. \n\nThis type of information might be stored in IT's secure password manager rather than our general knowledge base documents.",
      sources: [],
    };
  }

  if (lowerQuery.includes('playbook') && lowerQuery.includes('q1')) {
    const doc = mockDocuments.find((d) => d.title.includes('Playbook'));
    if (!doc) return fallbackResponse();

    const sources: Source[] = [
      {
        id: 'src-5',
        documentId: doc.id,
        documentTitle: doc.title,
        section: 'Executive Summary',
        excerpt: 'The Q1 focus shifts from inbound qualification to aggressive outbound targeting in the healthcare sector, specifically aiming for organizations with >500 employees.',
        confidence: 0.91,
      }
    ];

    return {
      answer: "According to the Q1 Sales Playbook, the primary strategic shift for this quarter is moving away from inbound qualification and focusing heavily on aggressive outbound targeting. The specific target demographic is the healthcare sector, concentrating on organizations that have over 500 employees.",
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
