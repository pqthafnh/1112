/**
 * Skills Section Component
 * Purpose: Showcase technical skills organized by category
 * Groups skills using reduce and renders as tag pills
 */

import { Container, Section, SectionTitle, Tag } from '../ui';
import { useIntersectionObserver } from '../../hooks';
import { skills } from '../../data';
import './Skills.css';

export function Skills() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <Section id="skills" className={`skills ${isVisible ? 'visible' : ''}`} ref={ref}>
      <Container>
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="skills-grid">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <div
              key={category}
              className="skill-category"
              style={{ transitionDelay: `${categoryIndex * 50}ms` }}
            >
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-tags">
                {categorySkills.map((skill, skillIndex) => (
                  <Tag
                    key={skill.id}
                    style={{ transitionDelay: `${categoryIndex * 50 + skillIndex * 30}ms` }}
                  >
                    {skill.name}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
