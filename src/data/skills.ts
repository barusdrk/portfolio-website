export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Vite",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Database",
    skills: [
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    title: "AI",
    skills: [
      "OpenAI API",
      "Prompt Engineering",
      "Structured Output",
      "Embeddings",
      "Semantic Search",
      "Vector Search",
      "Document Processing",
    ],
  },
  {
    title: "Full-Stack",
    skills: [
      "End-to-end SaaS application development",
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "VS Code",
    ],
  },
];
