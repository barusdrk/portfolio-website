import { X, ExternalLink } from "lucide-react";
import type { Project } from "../types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  if (!project) {
    return null;
  }

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="section-eyebrow">
              PROJECT DETAILS
            </span>

            <h2>{project.title}</h2>
          </div>

          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={22} />
          </button>
        </div>

        <div className="modal-content">
          <section>
            <h3>Overview</h3>
            <p>{project.description}</p>
          </section>

          <section>
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </section>

          <section>
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </section>

          <section>
            <h3>Key Features</h3>

            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Technology</h3>

            <div className="project-tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </section>

          {project.architecture && (
            <section>
              <h3>Architecture</h3>

              <div className="architecture">
                {project.architecture.map((step, index) => (
                  <div key={step} className="architecture-item">
                    <span>{step}</span>

                    {index < project.architecture!.length - 1 && (
                      <small>↓</small>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="modal-actions">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .269.18.58.688.482A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
              </svg>
              View GitHub
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
