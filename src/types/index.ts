export interface Project {
  title: string;
  slug: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  technologies: string[];
  featured: boolean;
  status: 'LIVE' | 'IN DEVELOPMENT' | 'PROTOTYPE' | 'EXPERIMENT';
  heroImage?: string;
  githubUrl?: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  context: string;
  myRoleDetails: string;
  approach: string[];
  workflowSteps?: { step: string; label: string; description: string }[];
  designDecisions: string[];
  engineeringDetails: string[];
  architectureDiagram?: string;
  challenges: { problem: string; resolution: string }[];
  solutionSummary: string;
  lessonsLearned: string[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  technology: string[];
  githubUrl: string;
  status: 'LIVE' | 'IN DEVELOPMENT' | 'PROTOTYPE' | 'EXPERIMENT';
  category: string;
  stars?: number;
}

export interface CapabilityGroup {
  id: string;
  number: string;
  title: string;
  skills: string[];
  description: string;
}

export interface PhilosophyArticle {
  id: string;
  title: string;
  summary: string;
  topic: string;
  readTime: string;
}
