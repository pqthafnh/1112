import React, { useEffect } from 'react';
import './Modal.css';

export function Modal({ open, onClose, title, children, ariaLabel }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={ariaLabel || title}>
      <div className="modal-panel">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        {title && <h3 className="modal-title">{title}</h3>}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
export default  Modal;