import { useState } from "react";
import { siteConfig } from "../../data/siteConfig";
import { Section, SectionTitle, Button, Card } from '../ui';
import { useLanguage } from '../../hooks';
import { translations } from '../../data';
import "./Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [sent, setSent] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const handleCopyEmail = (value = siteConfig.email) => {
    navigator.clipboard?.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Contact from ${name || emailInput || 'Website Visitor'}`;
    const body = [`Name: ${name || '—'}`, `Email: ${emailInput || '—'}`, ``, message || ''].join('\n');

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open user's mail client with prefilled message
    try {
      window.location.href = mailto;
    } catch (err) {
      window.open(mailto, '_blank');
    }

    setSent(true);
    setModalVisible(true);

    // reset form
    setName('');
    setEmailInput('');
    setMessage('');
  };

  const closeModal = () => setModalVisible(false);

  return (
    <Section id="contact">
      <SectionTitle
        title={t.contactSectionTitle}
        subtitle={t.contactSectionSubtitle}
        align="center"
      />

      <div className="contact-grid">
        {/* Cột trái: Thông tin liên hệ */}
        <Card hoverable className="contact-info-card">
          <h3 className="contact-heading">{t.contactInfoHeading}</h3>

          <div className="contact-method-block">
            <div className="contact-label">
              <span className="contact-icon">✉️</span>
              <span>{t.contactLabelEmail}</span>
            </div>
            <div className="email-copy-row">
              <span className="email-address">{siteConfig.email}</span>
              <Button
                variant="ghost"
                size="md"
                onClick={() => handleCopyEmail()}
                className="copy-button"
              >
                {copied ? "✓ Copied!" : "Copy"}
              </Button>
            </div>
          </div>

          <div className="contact-method-block">
            <div className="contact-label">
              <span className="contact-icon">🌐</span>
              <span>{t.contactLabelSocial}</span>
            </div>
            <div className="social-links-container">
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  GitHub
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  LinkedIn
                </a>
              )}
              {siteConfig.social.Facebook && (
                <a
                  href={siteConfig.social.Facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>
        </Card>

        {/* Cột phải: Form demo */}
        <Card hoverable className="contact-form-card">
          <h3 className="contact-heading">{t.contactFormTitle}</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                {t.formLabelName}
              </label>
              <input
                type="text"
                id="name"
                placeholder="Họ tên của bạn"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                {t.formLabelEmail}
              </label>
              <input
                type="email"
                id="email"
                placeholder="abc@example.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                {t.formLabelMessage}
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-input"
              />
            </div>
            <Button type="submit" className="submit-button">
              {t.sendMessage}
            </Button>
            <p className="form-note">
              {t.formNotePrefix} <strong>{siteConfig.email}</strong>
            </p>
          </form>

          {modalVisible && (
            <div className="thankyou-modal-overlay" onClick={closeModal}>
              <div className="thankyou-modal" onClick={(e) => e.stopPropagation()}>
                <h3>{t.modalThanksTitle}</h3>
                <p>{t.modalThanksBody}</p>
                <p>
                  {t.modalEmailText} <strong className="modal-email">{siteConfig.email}</strong>
                </p>
                <div className="modal-actions">
                  <Button variant="ghost" onClick={() => handleCopyEmail(siteConfig.email)}>
                    {copied ? '✓ Copied' : t.copyEmail}
                  </Button>
                  <Button onClick={closeModal}>{t.close}</Button>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </Section>
  );
};

export default Contact;