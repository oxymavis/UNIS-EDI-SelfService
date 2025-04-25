// Simple in-memory database for demo purposes
interface Application {
  id: string;
  name: string;
  code: string;
  description?: string;
  protocol: 'AS2' | 'SFTP' | 'API';
  interfaces: string[];
  status: 'active' | 'inactive';
  createdAt: string;
  lastModified: string;
  certificates: Certificate[];
  testResults: TestResult[];
}

interface Certificate {
  id: string;
  name: string;
  expiresAt: string;
  status: 'active' | 'expired';
}

interface TestResult {
  id: string;
  timestamp: string;
  interface: string;
  status: 'success' | 'failed';
  message: string;
}

interface DeploymentRequest {
  id: string;
  appId: string;
  status: 'pending' | 'approved' | 'rejected';
  notes?: string;
  checklist: {
    testsCompleted: boolean;
    certificatesValid: boolean;
    configurationReviewed: boolean;
  };
  connectionDetails?: {
    as2Url: string;
    as2Id: string;
    partnerAs2Id: string;
    goLiveDate: string;
  };
}

interface Document {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
}

// Sample data
const db = {
  applications: new Map<string, Application>(),
  certificates: new Map<string, Certificate>(),
  deployments: new Map<string, DeploymentRequest>(),
  documents: new Map<string, Document>(),
};

// Initialize with sample data
const sampleApp: Application = {
  id: 'app-1',
  name: 'Order Processor',
  code: 'ORD-PROC',
  description: 'Processes order EDI messages (940)',
  protocol: 'AS2',
  interfaces: ['940', '997'],
  status: 'active',
  createdAt: '2024-01-15',
  lastModified: '2024-03-20',
  certificates: [
    {
      id: 'cert-1',
      name: 'Partner AS2 Certificate',
      expiresAt: '2024-12-31',
      status: 'active',
    },
  ],
  testResults: [
    {
      id: 'test-1',
      timestamp: '2024-03-20T10:00:00Z',
      interface: '940',
      status: 'success',
      message: 'All validation checks passed',
    },
  ],
};

// Sample documents
const sampleDocs: Document[] = [
  {
    id: 'doc-1',
    title: 'EDI 940 Specification',
    description: 'Warehouse Shipping Order specification',
    category: 'EDI Specifications',
    content: '# EDI 940 Specification\n\nDetailed documentation for EDI 940 format...',
  },
  {
    id: 'doc-2',
    title: 'AS2 Configuration Guide',
    description: 'Guide for setting up AS2 connections',
    category: 'Configuration Guides',
    content: '# AS2 Configuration Guide\n\nStep by step guide for AS2 setup...',
  },
  {
    id: 'doc-3',
    title: 'Testing Guidelines',
    description: 'Best practices for EDI testing',
    category: 'Testing',
    content: '# EDI Testing Guidelines\n\nBest practices and procedures for testing...',
  },
];

db.applications.set(sampleApp.id, sampleApp);
db.certificates.set(sampleApp.certificates[0].id, sampleApp.certificates[0]);
sampleDocs.forEach(doc => db.documents.set(doc.id, doc));

export { db };
export type { Application, Certificate, TestResult, DeploymentRequest, Document }; 