/**
 * TimelineItem Component
 * Purpose: Single experience item in timeline
 * 
 * Props:
 *  - experience: experience object
 *  - index: item index
 */

import { useIntersectionObserver } from '../../hooks';
import './TimelineItem.css';

export function TimelineItem({ experience, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`timeline-item ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="timeline-marker"></div>

      <div className="timeline-content">
        <h3 className="timeline-role">{experience.role}</h3>
        <p className="timeline-company">{experience.company}</p>

        <div className="timeline-meta">
          <span className="timeline-period">{experience.period}</span>
          {experience.location && <span className="timeline-location">{experience.location}</span>}
        </div>

        <p className="timeline-description">{experience.description}</p>

        {(experience.github || experience.figma) && (
          <div className="timeline-links">
            {experience.github && (
              <a
                href={experience.github}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-link github-link"
              >
                <span className="link-icon">📁</span>
                GitHub
              </a>
            )}
            {experience.figma && (
              <a
                href={experience.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-link figma-link"
              >
                <span className="link-icon">🎨</span>
                Figma
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
