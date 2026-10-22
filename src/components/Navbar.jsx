import { useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo, navLinks } from "../data/portfolioData";

// Navbar component
// React concept: useState - to remember if mobile menu is open or closed
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="navbar">
      <nav className="nav container" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={closeMenu}>
          {personalInfo.brand}
        </a>

        {/* Desktop links - rendered with .map() */}
        <ul className="nav-links">
          {navLinks.map(function (link) {
            return (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            );
          })}
          <li>
            <a href="#contact" className="btn btn-primary btn-small">
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="menu-button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile links - conditional rendering with && */}
      {isMenuOpen && (
        <ul className="mobile-links container">
          {navLinks.map(function (link) {
            return (
              <li key={link.id}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a href="#contact" className="btn btn-primary" onClick={closeMenu}>
              Let's Talk
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
