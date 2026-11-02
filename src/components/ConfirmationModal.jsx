import React from 'react';

export default function ConfirmationModal({ isOpen, onClose, referenceCode }) {
  if (!isOpen) return null;

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) {
          onClose();
        }
      }}
    >
      <div className="modal-card">
        <div className="modal-icon">✓</div>
        <span className="badge-yellow" style={{ marginBottom: '0.75rem' }}>REQUEST RECEIVED</span>
        <h3 id="modal-title" style={{ color: 'var(--color-midnight-blue)', fontSize: '1.7rem', marginBottom: '0.75rem' }}>
          Your Priority Slot Assessment is Active!
        </h3>
        <p style={{ color: 'var(--color-muted-text)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Thank you for trusting <strong>getmeschengen</strong>. Your Dubai case file reference is:
        </p>

        <div style={{ backgroundColor: '#f1f5f9', borderRadius: '12px', padding: '1rem', marginBottom: '1.75rem' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-muted-text)', fontWeight: 700, letterSpacing: '0.5px' }}>
            Tracking Reference
          </span>
          <div style={{ fontFamily: 'monospace', fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-midnight-blue)' }}>
            {referenceCode || 'DXB-SCH-492104'}
          </div>
        </div>

        <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '1.75rem' }}>
          Our senior European dossier specialist will review your itinerary and contact you within <strong>2 business hours</strong> via WhatsApp / phone to confirm your consular submission slot.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a 
            href="https://wa.me/971501089562" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-accent-yellow" 
            style={{ width: '100%', textAlign: 'center' }}
          >
            <span>Open WhatsApp Chat: +971 50 108 9562</span>
          </a>
          <button 
            type="button"
            onClick={onClose}
            className="btn-outline-white" 
            style={{ color: 'var(--color-midnight-blue)', borderColor: '#cbd5e1', width: '100%' }}
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}

