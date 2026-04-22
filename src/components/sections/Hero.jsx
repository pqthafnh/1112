/**
 * Hero Section Component
 * Purpose: Eye-catching welcome section with greeting and CTAs
 * 
 * Features:
 *  - Large greeting text
 *  - Role description
 *  - Call-to-action buttons
 *  - Featured tech stack display
 *  - Subtle background decoration
 */

import { Container, Button, Section } from '../ui';
import { useIntersectionObserver } from '../../hooks';
import { siteConfig, skills } from '../../data';
import './Hero.css';

export function Hero() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Featured technologies to display
  const featuredTechs = ['React', 'JavaScript', 'Figma', 'Move (SUI)', 'Flutter', 'Next.js'];
  const displayTechs = skills.filter((skill) => featuredTechs.includes(skill.name)).slice(0, 6);

  return (
    <Section id="hero" className={`hero ${isVisible ? 'visible' : ''}`}>
      <Container>
        <div className="hero-content" ref={ref}>
          <div className="hero-text">
            <p className="hero-greeting">Hello —</p>
            <h1 className="hero-title">
              {siteConfig.name}
            </h1>
            <p className="hero-role">{siteConfig.role}</p>
            <p className="hero-bio">{siteConfig.bio}</p>

            {/* Featured Tech Stack */}
            <div className="hero-tech-stack">
              <p className="tech-stack-label">Featured Stack:</p>
              <div className="tech-tags">
                {displayTechs.map((tech, index) => (
                  <span key={tech.id} className="tech-tag" style={{ '--delay': `${index * 50}ms` }}>
                    <span className="tech-icon">⚡</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-cta">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScroll('projects')}
                aria-label="View projects"
              >
                View Projects
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => handleScroll('contact')}
                aria-label="Contact me"
              >
                Contact
              </Button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-avatar">
              <div className="avatar-placeholder"> <img src="1.jpg" alt="Profile" /></div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
