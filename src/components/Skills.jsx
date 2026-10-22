import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/portfolioData";

// Skills component
// React concept: Nested .map() - first map over categories,
// then map over the skills inside each category.
function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHeading
          title="Skills"
          subtitle="Technologies I work with and what I am learning next."
        />

        <div className="cards-grid">
          {skillCategories.map(function (category) {
            return (
              <article key={category.id} className="skill-card">
                <h3>{category.title}</h3>
                <div className="chip-list">
                  {category.skills.map(function (skill) {
                    return (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
