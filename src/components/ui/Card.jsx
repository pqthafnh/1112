/**
 * Card Component
 * Purpose: Reusable container with border, shadow, and hover effects
 * Used for projects, skills, and other content blocks
 * 
 * Props:
 *  - children: card content
 *  - hoverable: boolean (default: false) - adds hover elevation effect
 *  - padding: string (default: 'var(--space-xl)') - custom padding
 *  - className: additional CSS classes
 */

import './Card.css';

export function Card({
  children,
  hoverable = false,
  padding = 'var(--space-xl)',
  className = '',
  style = {},
}) {
  // Merge provided style with padding, allowing callers to pass inline styles
  const mergedStyle = { padding, ...style };

  return (
    <div
      className={`card ${hoverable ? 'card-hoverable' : ''} ${className}`}
      style={mergedStyle}
    >
      {children}
    </div>
  );
}
export default Card;