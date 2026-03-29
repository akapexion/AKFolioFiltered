import React from "react";
import { Github, Linkedin, Mail, MapPin, Terminal, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600&display=swap');

        .footer-root {
          font-family: 'Outfit', sans-serif;
          background: var(--navy-900);
          border-top: 1px solid var(--border-subtle);
          position: relative;
          overflow: hidden;
        }

        /* Top glow line */
        .footer-root::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-blue), var(--accent-cyan), transparent);
          opacity: 0.5;
        }

        .footer-root::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(var(--accent-blue-rgb), 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px 2rem 0;
          position: relative;
          z-index: 1;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 56px;
        }

        /* Brand */
        .footer-brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          cursor: default;
        }

        .logo-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--navy-600), var(--accent-blue));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px var(--accent-glow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(var(--accent-blue-rgb), 0.3);
        }

        .footer-brand-logo:hover .logo-icon {
          transform: rotate(12deg) scale(1.05);
          box-shadow: 0 0 32px var(--accent-glow);
        }

        .brand-name {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-bright);
        }

        .footer-desc {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--text-muted);
          max-width: 340px;
          margin-bottom: 20px;
        }

        .footer-desc .hl-cyan { color: var(--accent-cyan); font-weight: 500; }

        .footer-location {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
          background: rgba(var(--navy-800-rgb), 0.8);
          border: 1px solid var(--border-subtle);
          padding: 6px 12px;
          border-radius: 100px;
        }

        /* Nav column */
        .footer-col-title {
          font-family: 'Syne', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border-subtle);
        }

        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-nav-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 400;
          color: var(--text-muted);
          text-decoration: none;
          padding: 6px 0;
          transition: color 0.2s ease, padding-left 0.2s ease;
        }

        .footer-nav-link svg {
          opacity: 0;
          transform: translate(-4px, 4px);
          transition: all 0.2s ease;
        }

        .footer-nav-link:hover {
          color: var(--text-bright);
          padding-left: 6px;
        }

        .footer-nav-link:hover svg {
          opacity: 1;
          transform: translate(0, 0);
          color: var(--accent-blue);
        }

        /* Socials */
        .social-link {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: var(--text-muted);
          text-decoration: none;
          padding: 8px 10px;
          border-radius: 10px;
          border: 1px solid transparent;
          transition: all 0.25s ease;
          margin-bottom: 4px;
        }

        .social-icon-wrap {
          width: 36px;
          height: 36px;
          background: rgba(var(--navy-800-rgb), 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dim);
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .social-link:hover {
          color: var(--text-bright);
          background: rgba(var(--accent-blue-rgb), 0.06);
          border-color: var(--border-subtle);
        }

        .social-link:hover .social-icon-wrap {
          background: rgba(var(--accent-blue-rgb), 0.12);
          border-color: var(--border-glow);
          color: var(--accent-blue);
          box-shadow: 0 0 12px rgba(var(--accent-blue-rgb), 0.2);
        }

        /* Bottom bar */
        .footer-bottom {
          border-top: 1px solid var(--border-subtle);
          padding: 24px 0 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-copy {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        .footer-copy span {
          color: var(--accent-blue);
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-link-item {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
          cursor: pointer;
          transition: color 0.2s ease;
          text-decoration: none;
        }

        .footer-link-item:hover {
          color: var(--accent-blue);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">
          <div className="footer-grid">

            {/* Brand */}
            <div>
              <div className="footer-brand-logo">
                <div className="logo-icon">
                  <Terminal size={20} color="white" />
                </div>
                <span className="brand-name">Asad Khan</span>
              </div>
              <p className="footer-desc">
                MERN Stack Specialist with 2.5+ years of industry experience.
                Bridging the gap between scalable development and technical education
                at <span className="hl-cyan">Aptech Pakistan</span>.
              </p>
              <div className="footer-location">
                <MapPin size={12} color="var(--accent-blue)" />
                Karachi, Pakistan
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="footer-col-title">Navigation</h3>
              <ul className="footer-nav-list">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer-nav-link">
                      {link.name}
                      <ArrowUpRight size={13} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="footer-col-title">Socials</h3>
              <div>
                <a href="https://github.com/akapexion" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon-wrap"><Github size={17} /></div>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/asadklm" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon-wrap"><Linkedin size={17} /></div>
                  LinkedIn
                </a>
                <a href="mailto:asadklm30@gmail.com" className="social-link">
                  <div className="social-icon-wrap"><Mail size={17} /></div>
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p className="footer-copy">
              © {currentYear} <span>Asad Khan</span> — Built with React &amp; Tailwind
            </p>
            <div className="footer-links">
              <a href="#" className="footer-link-item">Privacy Policy</a>
              <a href="#" className="footer-link-item">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;