/**
 * TimelineItem Component
 * Purpose: Single experience item in timeline
 * 
 * Props:
 *  - experience: experience object
 *  - index: item index
 */

import { useIntersectionObserver, useLanguage } from '../../hooks';
import { translations } from '../../data';
import localize from '../../utils/i18n';
import './TimelineItem.css';

export function TimelineItem({ experience, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const { language } = useLanguage();
  const t = translations[language];
  const role = localize(experience.role, language);
  const company = localize(experience.company, language);
  const description = localize(experience.description, language);

  return (
    <div
      ref={ref}
      className={`timeline-item ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="timeline-marker"></div>

      <div className="timeline-content">
        <h3 className="timeline-role">{role}</h3>
        <p className="timeline-company">{company}</p>

        <div className="timeline-meta">
          <span className="timeline-period">{experience.period}</span>
          {experience.location && <span className="timeline-location">{localize(experience.location, language)}</span>}
        </div>

        <p className="timeline-description">{description}</p>

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
                {t.githubLabel}
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
                {t.figmaLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
