/**
 * Experience Section Component
 * Purpose: Display work experience timeline
 * Shows career progression with role, company, period, and description
 */

import { Container, Section, SectionTitle } from '../ui';
import { experiences } from '../../data';
import { TimelineItem } from './TimelineItem';
import './Experience.css';

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and roles"
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
