/**
 * About Section Component
 * Purpose: Personal biography and background
 * Displays longer-form text about the engineer
 */

import { Container, Section, SectionTitle } from '../ui';
import { useIntersectionObserver, useLanguage } from '../../hooks';
import { translations } from '../../data';
import './About.css';

export function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="about" className={`about ${isVisible ? 'visible' : ''}`} ref={ref}>
      <Container>
        <SectionTitle
          title={t.aboutTitle}
          subtitle={t.about}
        />

        <div className={`about-content ${isVisible ? 'fade-in' : 'fade-up'}`}>
          <div className="about-text">
            {t.aboutContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-number">2+</div>
              <div className="highlight-label">Years Experience</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">3+</div>
              <div className="highlight-label">Projects Completed</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">30+</div>
              <div className="highlight-label">Happy Clients</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">100%</div>
              <div className="highlight-label">Dedication</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
