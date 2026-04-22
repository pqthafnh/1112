/**
 * Education Section Component
 * Purpose: Display education and certifications
 * Shows academic degrees, institutions, and professional certifications
 */

import { Container, Section, SectionTitle } from '../ui';
import { education, certifications } from '../../data';
import { useIntersectionObserver } from '../../hooks';
import './Education.css';

export function Education() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <Section id="education" className={`education ${isVisible ? 'visible' : ''}`} ref={ref}>
      <Container>
        <SectionTitle
          title="Education & Certifications"
          subtitle="Academic background and professional credentials"
        />

        <div className={`education-content ${isVisible ? 'fade-in' : ''}`}>
          {/* Education Section */}
          <div className="education-subsection">
            <h3 className="education-subtitle">Education</h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="education-item"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="education-header">
                    <div className="education-info">
                      <h4 className="education-degree">{edu.degree}</h4>
                      <p className="education-institution">{edu.institution}</p>
                    </div>
                    <div className="education-meta">
                      <span className="education-period">
                        {edu.startYear} – {edu.endYear}
                      </span>
                      <span className={`education-status ${edu.status.toLowerCase()}`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  {edu.gpa && <p className="education-gpa">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="education-subsection">
            <h3 className="education-subtitle">Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="certification-item"
                  style={{ transitionDelay: `${(index + education.length) * 100}ms` }}
                >
                  <div className="certification-header">
                    <h4 className="certification-name">
                      {cert.link !== '#' ? (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          {cert.name}
                        </a>
                      ) : (
                        cert.name
                      )}
                    </h4>
                    <span className="certification-date">{cert.date}</span>
                  </div>
                  <p className="certification-issuer">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
