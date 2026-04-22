/**
 * Projects Section Component
 * Purpose: Showcase portfolio projects in a grid layout
 * Displays projects with tech stack and links
 */

import { Container, Section, SectionTitle } from '../ui';
import { useIntersectionObserver } from '../../hooks';
import { projects } from '../../data';
import { ProjectCard } from './ProjectCard';
import './Projects.css';

export function Projects() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <Section id="projects" className={`projects ${isVisible ? 'visible' : ''}`} ref={ref}>
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of my recent work and side projects"
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
