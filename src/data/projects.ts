import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "ai-text-summarizer",
    title: "AI Text Summarizer",
    shortDescription:
      "Transform long text into concise summaries and useful information.",
    description:
      "An AI-powered application that helps users summarize long articles and documents into clear, useful results.",
    problem:
      "Long documents can take significant time to read and extract important information from.",
    solution:
      "The application uses AI to generate concise summaries, extract important keywords, and identify useful action items.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
    ],
    features: [
      "AI text summarization",
      "Multiple summary lengths",
      "Action items",
      "Keyword extraction",
      "Reading time",
      "PDF, DOCX, and TXT support",
      "Authentication",
      "Saved history",
    ],
    categories: ["AI", "Document AI", "Productivity"],
    githubUrl: "https://github.com/barusdrk/ai-text-summarizer",
    liveUrl: "https://ai-text-summarizer-val8.onrender.com",
    architecture: [
      "React Client",
      "Express API",
      "AI Service",
      "MongoDB",
    ],
  },
  {
    id: "ai-email-reply-assistant",
    title: "AI Email Reply Assistant",
    shortDescription:
      "Generate professional AI-powered replies and manage email workflows.",
    description:
      "A full-stack AI email assistant designed to help users generate replies and manage email-based workflows.",
    problem:
      "Writing consistent and professional replies repeatedly can take time, especially when handling customer communication.",
    solution:
      "The application generates context-aware replies and supports different tones, reply lengths, and email workflow features.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
    ],
    features: [
      "AI-generated replies",
      "Multiple reply tones",
      "Reply length selection",
      "Email signature customization",
      "Gmail integration",
      "Outlook integration",
      "Draft generation",
      "Approval workflows",
      "Inbox synchronization",
    ],
    categories: ["AI", "Productivity"],
    githubUrl:
      "https://github.com/barusdrk/ai-email-reply-assistant",
    architecture: [
      "React Client",
      "Express API",
      "AI Reply Service",
      "Email Providers",
      "MongoDB",
    ],
  },
  {
    id: "ai-meeting-notes-generator",
    title: "AI Meeting Notes Generator",
    shortDescription:
      "Convert meeting transcripts into structured and actionable notes.",
    description:
      "An AI application that processes meeting transcripts and converts them into organized summaries, decisions, action items, and assigned tasks.",
    problem:
      "Meeting participants often spend significant time manually reviewing transcripts and identifying important outcomes.",
    solution:
      "AI processes the transcript and returns structured meeting information that is easier to review and act on.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
    ],
    features: [
      "Meeting summaries",
      "Decision extraction",
      "Action items",
      "Assigned tasks",
      "Structured AI output",
      "Long transcript processing",
      "TXT, DOCX, and PDF support",
    ],
    categories: ["AI", "Document AI", "Productivity"],
    githubUrl:
      "https://github.com/barusdrk/ai-meeting-notes-generator",
    architecture: [
      "Transcript Input",
      "Text Extraction",
      "AI Processing",
      "Structured Output",
      "MongoDB",
    ],
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    shortDescription:
      "Analyze resumes against job requirements and provide actionable feedback.",
    description:
      "An AI-powered application that helps job seekers evaluate resumes and identify opportunities for improvement.",
    problem:
      "Job seekers may not know which skills, keywords, or resume sections need improvement for a specific position.",
    solution:
      "The application analyzes resume content and compares it against target job requirements to generate structured feedback.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
    ],
    features: [
      "Resume match score",
      "Missing skills detection",
      "ATS compatibility analysis",
      "Job description comparison",
      "Keyword matching",
      "Improvement suggestions",
      "Cover letter generation",
      "Interview question generation",
    ],
    categories: ["AI", "Document AI", "Career"],
    githubUrl: "https://github.com/barusdrk/ai-resume-analyzer",
    liveUrl: "https://ai-resume-analyzer-nine-gray.vercel.app",
    architecture: [
      "React Client",
      "Express API",
      "Resume Analysis",
      "AI Service",
      "MongoDB",
    ],
  },
  {
    id: "ai-document-qa",
    title: "AI Document Q&A",
    shortDescription:
      "Upload documents and ask AI questions about their contents.",
    description:
      "A document intelligence application that combines document processing, embeddings, vector search, and AI-generated answers.",
    problem:
      "Searching through large documents manually to find specific information can be slow and inefficient.",
    solution:
      "Documents are processed and indexed for semantic retrieval so relevant context can be provided to an AI model when answering questions.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Embeddings",
      "Vector Search",
      "OpenAI API",
    ],
    features: [
      "Document upload",
      "PDF, DOCX, and TXT support",
      "Text extraction",
      "Document chunking",
      "Embeddings",
      "Vector search",
      "Semantic retrieval",
      "AI-generated answers",
    ],
    categories: ["AI", "Document AI", "RAG"],
    githubUrl: "https://github.com/barusdrk/ai-document-qa",
    architecture: [
      "Document Upload",
      "Text Extraction",
      "Chunking",
      "Embeddings",
      "Vector Search",
      "AI Answer",
    ],
  },
];
