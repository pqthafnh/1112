/**
 * ProjectCard Component
 * Purpose: Individual project card used in Projects grid
 * 
 * Props:
 *  - project: project object with title, description, tech, demo, github
 *  - index: card index for stagger animation
 */

import { Card, Tag, Button } from '../ui';
import './ProjectCard.css';

export function ProjectCard({ project, index }) {
  return (
    <Card hoverable className="project-card" style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        {project.date && <span className="project-date">📅 {project.date}</span>}
      </div>

      <p className="project-description">{project.description}</p>

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
            title="View demo or figma"
          >
            📎 Demo
          </Button>
        )}
        {project.github && project.github !== '#' && (
          <Button
            variant="ghost"
            size="md"
            onClick={() => window.open(project.github, '_blank')}
            title="View source code"
          >
            📁 GitHub
          </Button>
        )}
        {project.figma && project.figma !== '#' && (
          <Button
            variant="ghost"
            size="md"
            onClick={() => window.open(project.figma, '_blank')}
            title="View design file"
          >
            🎨 Figma
          </Button>
        )}
      </div>
    </Card>
  );
}
