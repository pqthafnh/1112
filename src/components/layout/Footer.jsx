/**
 * Footer Component
 * Purpose: Sticky footer with copyright and attribution
 */

import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">
          © {currentYear} Phạm Quang Thành - Software Engineer.
        </p>
        <p className="footer-built">
          Contact with me: phamquangthanh1113@gmail.com <span className="footer-heart">🐢</span>
        </p>
      </div>
    </footer>
  );
}
