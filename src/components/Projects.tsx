import { useMemo, useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";
import type {
  Project,
  ProjectCategory,
} from "../types/project";

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "AI",
  "Document AI",
  "Productivity",
  "Career",
  "RAG"
];

function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<"All" | ProjectCategory>("All");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.categories.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="FEATURED PROJECTS"
          title="AI SaaS applications I have built."
          description="A collection of projects focused on turning AI capabilities into useful applications and workflows."
        />

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
