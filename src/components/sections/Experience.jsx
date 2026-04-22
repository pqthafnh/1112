/**
 * Experience Section Component
 * Purpose: Display work experience timeline
 * Shows career progression with role, company, period, and description
 */

import { Container, Section, SectionTitle } from '../ui';
import { experiences } from '../../data';
import { TimelineItem } from './TimelineItem';
import { useLanguage } from '../../hooks';
import { translations } from '../../data';
import './Experience.css';

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Section id="experience">
      <Container>
        <SectionTitle
          title={t.experienceTitle}
          subtitle={t.experienceSubtitle}
        />

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
