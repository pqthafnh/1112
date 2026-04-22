/**
 * SectionTitle Component
 * Purpose: Consistent section heading with optional subtitle
 * Includes decorative accent bar above title
 * 
 * Props:
 *  - title: main heading text (required)
 *  - subtitle: optional subheading
 *  - align: 'left' | 'center' (default: 'center')
 *  - className: additional CSS classes
 */

import './SectionTitle.css';

export function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  return (
    <div className={`section-title section-title-${align} ${className}`}>
      <div className="section-title-accent"></div>
      <h2 className="section-title-text">{title}</h2>
      {subtitle && <p className="section-title-subtitle">{subtitle}</p>}
    </div>
  );
}
export default SectionTitle;