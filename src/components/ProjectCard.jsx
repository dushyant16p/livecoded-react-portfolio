import { ExternalLink, Github } from "lucide-react";

// ProjectCard component
// React concept: Props - the Projects component passes one
// project object as props, and this card displays it.
// This makes ProjectCard reusable for any project.
function ProjectCard(props) {
  const project = props.project;

  return (
    <article className="project-card">
      {/* CSS visual placeholder - simple colored block with initials */}
      <div className="project-visual" aria-hidden="true">
        <span>{project.initials}</span>
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="chip-list">
          {project.tech.map(function (techItem) {
            return (
              <span key={techItem} className="chip chip-small">
                {techItem}
              </span>
            );
          })}
        </div>

        <div className="project-links">
          <a href={project.demoUrl} className="project-link">
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a href={project.codeUrl} className="project-link">
            <Github size={16} />
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
