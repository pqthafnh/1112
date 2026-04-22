import { useState } from "react";
import { siteConfig } from "../../data/siteConfig";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Card from "../ui/Card";
import "./Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact">
      <SectionTitle
        title="Get In Touch"
        subtitle="Have a question or want to work together? I'll get back to you as soon as possible."
        align="center"
      />

      <div className="contact-grid">
        {/* Cột trái: Thông tin liên hệ */}
        <Card hoverable className="contact-info-card">
          <h3 className="contact-heading">Contact Information</h3>

          <div className="contact-method-block">
            <div className="contact-label">
              <span className="contact-icon">✉️</span>
              <span>Email</span>
            </div>
            <div className="email-copy-row">
              <span className="email-address">{siteConfig.email}</span>
              <Button
                variant="ghost"
                size="md"
                onClick={handleCopyEmail}
                className="copy-button"
              >
                {copied ? "✓ Copied!" : "Copy"}
              </Button>
            </div>
          </div>

          <div className="contact-method-block">
            <div className="contact-label">
              <span className="contact-icon">🌐</span>
              <span>Social</span>
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
          <h3 className="contact-heading">Send a Message</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Họ tên của bạn"
                disabled
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="abc@example.com"
                disabled
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell me about your project..."
                disabled
                className="form-input"
              />
            </div>
            <Button type="submit" disabled className="submit-button">
              Send Message (Demo)
            </Button>
            <p className="form-note">
              * This is a UI demonstration. I'll add backend integration soon.
            </p>
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default Contact;