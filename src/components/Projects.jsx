import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

// Projects component
// React concepts:
// - useState: remembers the selected filter
// - .filter(): shows only projects that match the filter
// - .map(): renders one ProjectCard per project
function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filtering an array with .filter()
  const filteredProjects = projects.filter(function (project) {
    if (activeFilter === "all") {
      return true;
    }
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          title="Projects"
          subtitle="A few things I have built while learning. Use the filter to explore by type."
        />

        {/* Filter buttons - onClick updates state */}
        <div className="filter-buttons">
          <button
            type="button"
            className={activeFilter === "all" ? "filter-btn active" : "filter-btn"}
            onClick={function () {
              setActiveFilter("all");
            }}
          >
            All
          </button>
          <button
            type="button"
            className={activeFilter === "react" ? "filter-btn active" : "filter-btn"}
            onClick={function () {
              setActiveFilter("react");
            }}
          >
            React
          </button>
          <button
            type="button"
            className={activeFilter === "javascript" ? "filter-btn active" : "filter-btn"}
            onClick={function () {
              setActiveFilter("javascript");
            }}
          >
            JavaScript
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(function (project) {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>

        {/* Conditional rendering: shown only when filter has no results */}
        {filteredProjects.length === 0 && (
          <p className="empty-message">No projects found for this filter yet.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
