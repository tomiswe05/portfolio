import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const GetInTouch = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <Mail size={24} />,
      label: "Email",
      value: "oyaniyie@gmail.com",
      link: "mailto:oyaniyie@gmail.com",
      description: "Send me a message"
    },
    {
      id: 2,
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+234 7012301583",
      link: "tel:+2347012301583",
      description: "Let's talk"
    },
    {
      id: 3,
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/tomiswe05",
      link: "https://github.com/tomiswe05",
      description: "Check out my code"
    },
    {
      id: 4,
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/oyaniyi-oluwatomisin-843974222",
      link: "https://www.linkedin.com/in/oyaniyi-oluwatomisin-843974222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      description: "Connect with me"
    }
  ];

  const styles = `
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 80px 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      border-radius: 24px;
    }

    .contact-header {
      text-align: center;
      margin-bottom: 60px;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .contact-title {
      font-size: 4rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 24px 0;
      letter-spacing: -0.02em;
      line-height: 1.1;
    }

    .accent-dot {
      color: #8b5cf6;
    }

    .contact-subtitle {
      font-size: 1.25rem;
      color: #6b7280;
      line-height: 1.6;
      font-weight: 400;
      margin: 0;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
      margin-top: 48px;
    }

    .contact-card {
      background: white;
      border-radius: 16px;
      padding: 32px 24px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      display: block;
      position: relative;
      overflow: hidden;
    }

    .contact-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .contact-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #8b5cf6, #06b6d4, #10b981, #f59e0b);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .contact-card:hover::before {
      opacity: 1;
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 16px;
    }

    .icon-wrapper {
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, #8b5cf6, #06b6d4);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: transform 0.3s ease;
    }

    .contact-card:hover .icon-wrapper {
      transform: scale(1.1);
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0;
    }

    .card-description {
      font-size: 0.9rem;
      color: #6b7280;
      margin: 0;
      font-weight: 500;
    }

    .card-value {
      font-size: 1rem;
      color: #374151;
      font-weight: 500;
      word-break: break-all;
      transition: color 0.3s ease;
    }

    .contact-card:hover .card-value {
      color: #8b5cf6;
    }

    .cta-section {
      text-align: center;
      margin-top: 64px;
      padding: 48px 32px;
      background: white;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .cta-text {
      font-size: 1.125rem;
      color: #6b7280;
      margin: 0 0 24px 0;
      line-height: 1.6;
    }

    .response-time {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #f0f9ff;
      color: #0284c7;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .pulse-dot {
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .contact-container {
        padding: 60px 16px;
        margin: 16px;
      }

      .contact-title {
        font-size: 2.5rem;
      }

      .contact-subtitle {
        font-size: 1.125rem;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .contact-card {
        padding: 24px 20px;
      }

      .cta-section {
        margin-top: 48px;
        padding: 32px 24px;
      }
    }

    @media (max-width: 480px) {
      .contact-title {
        font-size: 2rem;
      }

      .card-value {
        font-size: 0.9rem;
      }
    }

    /* Large screens - 2x2 grid */
    @media (min-width: 1024px) {
      .contact-grid {
        grid-template-columns: repeat(2, 1fr);
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch<span className="accent-dot">.</span></h1>
          <p className="contact-subtitle">
            Looking to partner or work together? Reach out through any of the channels below 
            and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="contact-grid">
          {contactInfo.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              className="contact-card"
              target={contact.label === 'GitHub' || contact.label === 'LinkedIn' ? '_blank' : undefined}
              rel={contact.label === 'GitHub' || contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
            >
              <div className="card-header">
                <div className="icon-wrapper">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="card-title">{contact.label}</h3>
                  <p className="card-description">{contact.description}</p>
                </div>
              </div>
              <div className="card-value">{contact.value}</div>
            </a>
          ))}
        </div>

        <div className="cta-section">
          <p className="cta-text">
            Available for freelance opportunities, collaborations, and full-time positions.
          </p>
          <div className="response-time">
            <div className="pulse-dot"></div>
            Usually responds within 24 hours
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;