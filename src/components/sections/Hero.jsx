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
import avatar from '../../assets/1.jpg';
import { Container, Button, Section } from '../ui';
import { useIntersectionObserver, useLanguage } from '../../hooks';
import { siteConfig, skills } from '../../data';
import { translations } from '../../data/translations';
import './Hero.css';

export function Hero() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const { language } = useLanguage();
  const trans = translations[language] || translations.vi;

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
const skills = [
  {
    id: 1,
    name: 'React',
    icon: 'react-original',
  },
  {
    id: 2,
    name: 'JavaScript',
    icon: 'javascript-original',
  },
  {
    id: 3,
    name: 'Figma',
    icon: 'figma-original',
  },
  {
    id: 4,
    name: 'Move (SUI)',
    icon: 'sui-original', // nếu không có thì dùng svg custom
  },
  {
    id: 5,
    name: 'Flutter',
    icon: 'flutter-original',
  },
  {
    id: 6,
    name: 'Next.js',
    icon: 'nextjs-original',
  },
];
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
              {trans.name}
            </h1>
            <p className="hero-role">{trans.role}</p>
            <p className="hero-bio">{trans.bio}</p>

            {/* Featured Tech Stack */}
            <div className="hero-tech-stack">
              <p className="tech-stack-label">Featured Stack:</p>
              <div className="tech-tags">
                
{displayTechs.map((tech, index) => (
  <span
    key={tech.id}
    className="tech-tag"
    style={{ '--delay': `${index * 50}ms` }}
  >
    <i className={`tech-icon devicon-${tech.icon}`}></i>
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
                {trans.viewProjects}
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => handleScroll('contact')}
                aria-label="Contact me"
              >
                {trans.contact}
              </Button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-avatar">
              <img 
                src={avatar} 
                alt="Profile" 
                onError={(e) => {
                  e.target.src = '/assets/hero.png'; // fallback image
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
