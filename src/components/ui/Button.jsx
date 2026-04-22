/**
 * Button Component
 * Purpose: Reusable button with multiple variants and sizes
 * Handles primary, secondary, and ghost styles with hover states
 * 
 * Props:
 *  - variant: 'primary' | 'secondary' | 'ghost' (default: 'primary')
 *  - size: 'md' | 'lg' (default: 'md')
 *  - children: button content
 *  - className: additional CSS classes
 *  - onClick: click handler
 *  - disabled: boolean
 *  - type: 'button' | 'submit' | 'reset' (default: 'button')
 *  - ariaLabel: accessibility label
 */

import './Button.css';
import Card from './Card';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ariaLabel,
  ...props
}) {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
export default  Button;