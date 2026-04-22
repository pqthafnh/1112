/**
 * Navbar Component
 * Purpose: Sticky navigation header with logo, menu, and theme toggle
 * Mobile-responsive with hamburger menu
 * 
 * Features:
 *  - Sticky positioning
 *  - Active section highlighting
 *  - Backdrop blur effect
 *  - Mobile hamburger menu
 *  - Theme toggle button
 *  - Smooth scroll to sections
 */

import { useState } from 'react';
import { useActiveSection, useMediaQuery } from '../../hooks';
import { ThemeToggle } from './ThemeToggle';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Education', href: 'education' },
  { label: 'Contact', href: 'contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const activeSection = useActiveSection(['hero', ...NAV_ITEMS.map((item) => item.href)]);

  const handleNavClick = (href) => {
    setIsOpen(false);


    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <a href="#hero" className="navbar-logo" onClick={() => handleNavClick('hero')}>
            <span className="navbar-logo-icon">🐢</span>
            <span className="navbar-logo-text">Rùa</span>
          </a>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="navbar-menu">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                className={`navbar-link ${activeSection === item.href ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Theme Toggle */}
        <div className="navbar-end">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              className={`navbar-hamburger ${isOpen ? 'open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div className="navbar-mobile-menu">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className={`navbar-mobile-link ${activeSection === item.href ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
