export type ProjectId =
  | 'investment'
  | 'roleready'
  | 'interview'
  | 'wallet-ledger'
  | 'api-gateway'
  | 'transaction-search'
  | 'lld-library'
  | 'risk-analytics';

export type ArchitectureNodeKind = 'client' | 'gateway' | 'service' | 'database' | 'cache' | 'queue' | 'external' | 'monitoring' | 'storage' | 'test';

export interface ArchitectureNode {
  id: string;
  label: string;
  kind: ArchitectureNodeKind;
}

export interface ArchitectureLayer {
  name: string;
  nodes: ArchitectureNode[];
}

export interface ArchitectureConnection {
  from: string;
  to: string;
  label: string;
  asynchronous?: boolean;
}

export interface ArchitectureDiagramData {
  layers: ArchitectureLayer[];
  connections: ArchitectureConnection[];
}

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiEndpoint {
  id: string;
  method: ApiMethod;
  path: string;
  description: string;
  auth: string;
  purpose: string;
  request?: unknown;
  response: unknown;
}

export interface Project {
  id: ProjectId;
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  stack: string[];
  accent: string;
  highlights: string[];
  problem: string;
  approach: string;
  outcomes: string[];
  architectureDiagram: ArchitectureDiagramData;
  database: { name: string; purpose: string }[];
  challenges: { challenge: string; solution: string }[];
  features: string[];
  priority?: number;
  industryAlignment?: { organization: string; relevance: string }[];
}
