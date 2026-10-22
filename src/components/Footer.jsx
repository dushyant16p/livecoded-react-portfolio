import { ArrowUp } from "lucide-react";
import { personalInfo, navLinks } from "../data/portfolioData";

// Footer component
// React concept: Embedding a JavaScript expression in JSX
// with { } - here we calculate the current year dynamically.
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">{personalInfo.brand}</p>
          <p className="footer-line">
            Built with React while learning by building. Thanks for visiting!
          </p>
        </div>

        <ul className="footer-links">
          {navLinks.map(function (link) {
            return (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            );
          })}
        </ul>

        <a href="#home" className="back-to-top" aria-label="Back to top">
          <ArrowUp size={18} />
          <span>Top</span>
        </a>
      </div>

      <div className="container footer-bottom">
        <p>
          © {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
