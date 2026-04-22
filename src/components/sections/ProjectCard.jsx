/**
 * ProjectCard Component
 * Purpose: Individual project card used in Projects grid
 * 
 * Props:
 *  - project: project object with title, description, tech, demo, github
 *  - index: card index for stagger animation
 */

import { Card, Tag, Button } from '../ui';
import { useLanguage } from '../../hooks';
import { translations } from '../../data';
import localize from '../../utils/i18n';
import './ProjectCard.css';

export function ProjectCard({ project, index }) {
  const { language } = useLanguage();
  const t = translations[language];

  const title = localize(project.title, language);
  const description = localize(project.description, language);

  return (
    <Card hoverable className="project-card" style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        {project.date && <span className="project-date">📅 {project.date}</span>}
      </div>

      <p className="project-description">{description}</p>

      <div className="project-tech">
        {project.tech.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <div className="project-links">
        {project.demo && project.demo !== '#' && (
          <Button
            variant="ghost"
            size="md"
            onClick={() => window.open(project.demo, '_blank')}
            title={t.demoLabel}
          >
            📎 {t.demoLabel}
          </Button>
        )}
        {project.github && project.github !== '#' && (
          <Button
            variant="ghost"
            size="md"
            onClick={() => window.open(project.github, '_blank')}
            title={t.githubLabel}
          >
            📁 {t.githubLabel}
          </Button>
        )}
        {project.figma && project.figma !== '#' && (
          <Button
            variant="ghost"
            size="md"
            onClick={() => window.open(project.figma, '_blank')}
            title={t.figmaLabel}
          >
            🎨 {t.figmaLabel}
          </Button>
        )}
      </div>
    </Card>
  );
}
