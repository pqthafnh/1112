/**
 * Container Component
 * Purpose: Max-width wrapper with centered content and consistent padding
 * Used to constrain content width and maintain layout consistency
 * 
 * Props:
 *  - children: React nodes
 *  - className: additional CSS classes
 */

export function Container({ children, className = '' }) {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
}
