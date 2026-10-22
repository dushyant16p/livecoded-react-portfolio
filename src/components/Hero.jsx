import { personalInfo } from "../data/portfolioData";

// Hero component - the first section a visitor sees
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="availability-badge">
            <span className="availability-dot"></span>
            {personalInfo.availability}
          </span>

          <h1>{personalInfo.heroHeading}</h1>

          <p className="hero-intro">{personalInfo.heroIntro}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Connect
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          {/* CSS initials avatar - no external image needed */}
          <div className="avatar-circle">A</div>
          <p className="avatar-caption">Alex — Developer</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
