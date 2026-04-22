/**
 * Tag/Pill Component
 * Purpose: Display skill tags, tech stack badges
 * Reusable pill-shaped component with primary color
 * 
 * Props:
 *  - children: tag content/text
 *  - className: additional CSS classes
 */

import './Tag.css';

export function Tag({ children, className = '' }) {
  return <span className={`tag ${className}`}>{children}</span>;
}
export default Tag;