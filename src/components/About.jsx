import SectionHeading from "./SectionHeading";
import { aboutInfo, aboutCards } from "../data/portfolioData";

// About component
// React concept: .map() - rendering a list of cards from an array,
// with a stable "key" for each item.
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading title={aboutInfo.heading} subtitle={aboutInfo.subheading} />

        <p className="about-paragraph">{aboutInfo.paragraph}</p>

        <div className="cards-grid">
          {aboutCards.map(function (card) {
            return (
              <article key={card.id} className="info-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
