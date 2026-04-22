/**
 * Projects Section Component
 * Purpose: Showcase portfolio projects in a grid layout
 * Displays projects with tech stack and links
 */

import { Container, Section, SectionTitle } from '../ui';
import { useIntersectionObserver, useLanguage } from '../../hooks';
import { projects } from '../../data';
import { ProjectCard } from './ProjectCard';
import { translations } from '../../data';
import './Projects.css';

export function Projects() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="projects" className={`projects ${isVisible ? 'visible' : ''}`} ref={ref}>
      <Container>
        <SectionTitle
          title={t.projectsTitle}
          subtitle={t.projectsSubtitle}
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
