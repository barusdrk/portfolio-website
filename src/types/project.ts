export type ProjectCategory =
  | "AI"
  | "Document AI"
  | "Productivity"
  | "Career"
  | "RAG";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  categories: ProjectCategory[];
  githubUrl: string;
  liveUrl?: string;
  architecture?: string[];
}
