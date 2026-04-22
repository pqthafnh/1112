/**
 * Education Section Component
 * Purpose: Display education and certifications
 * Shows academic degrees, institutions, and professional certifications
 */

import { Container, Section, SectionTitle } from '../ui';
import { education, certifications } from '../../data';
import { useIntersectionObserver, useLanguage } from '../../hooks';
import { translations } from '../../data';
import localize from '../../utils/i18n';
import './Education.css';

export function Education() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="education" className={`education ${isVisible ? 'visible' : ''}`} ref={ref}>
      <Container>
        <SectionTitle
          title={t.educationTitle}
          subtitle={t.educationSubtitle}
        />

        <div className={`education-content ${isVisible ? 'fade-in' : ''}`}>
          {/* Education Section */}
          <div className="education-subsection">
            <h3 className="education-subtitle">{t.education}</h3>
            <div className="education-list">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="education-item"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="education-header">
                    <div className="education-info">
                      <h4 className="education-degree">{localize(edu.degree, language)}</h4>
                      <p className="education-institution">{localize(edu.institution, language)}</p>
                    </div>
                    <div className="education-meta">
                      <span className="education-period">
                        {edu.startYear} – {edu.endYear === 'present' ? t.present : edu.endYear}
                      </span>
                      <span className={`education-status ${edu.status}`}>
                        {t.statuses?.[edu.status] ?? edu.status}
                      </span>
                    </div>
                  </div>
                  {edu.gpa && <p className="education-gpa">{t.gpaLabel} {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="education-subsection">
            <h3 className="education-subtitle">{t.certifications}</h3>
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
                          {localize(cert.name, language)}
                        </a>
                      ) : (
                        localize(cert.name, language)
                      )}
                    </h4>
                    <span className="certification-date">{cert.date}</span>
                  </div>
                  <p className="certification-issuer">{localize(cert.issuer, language)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
