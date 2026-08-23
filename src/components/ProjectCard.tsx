import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">{project.id}</span>
      </div>
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="project-tags">
          {project.technologies.slice(0, 4).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
      <div className="project-card-actions">
        <button onClick={() => onSelect(project)} className="text-button">
          View Details
          <ArrowUpRight size={16} />
        </button>
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .269.18.58.688.482A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
            </svg>
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} live demo`}>
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
