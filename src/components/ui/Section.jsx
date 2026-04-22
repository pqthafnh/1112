/**
 * Section Component
 * Purpose: Wrapper for page sections with consistent padding and spacing
 * Used for Hero, About, Skills, Projects, Experience, Contact sections
 * 
 * Props:
 *  - children: section content
 *  - id: section identifier (for navigation)
 *  - className: additional CSS classes
 */

import './Section.css';
import { forwardRef } from 'react';

export const Section = forwardRef(function Section({ children, id, className = '' }, ref) {
  return (
    <section id={id} ref={ref} className={`section ${className}`}>
      {children}
    </section>
  );
});
export default Section;