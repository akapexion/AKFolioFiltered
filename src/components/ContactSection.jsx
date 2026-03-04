import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Github, Linkedin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --navy-950: #020917;
          --navy-900: #050f1f;
          --navy-800: #0a1a33;
          --navy-700: #0e2347;
          --navy-600: #133060;
          --accent-blue: #4d8ef0;
          --accent-cyan: #38bdf8;
          --accent-glow: rgba(77, 142, 240, 0.35);
          --text-bright: #e8f0ff;
          --text-muted: #6b84ad;
          --text-dim: #3d5278;
          --border-subtle: rgba(77, 142, 240, 0.12);
          --border-glow: rgba(77, 142, 240, 0.28);
        }

        .contact-section {
          padding: 140px 0 100px;
          background: var(--navy-950);
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
          border-top: 1px solid var(--border-subtle);
        }

        /* Top glow line */
        .contact-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 15%;
          right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-blue), var(--accent-cyan), transparent);
          opacity: 0.5;
        }

        /* Central radial glow */
        .contact-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 500px;
          background: radial-gradient(ellipse, rgba(77, 142, 240, 0.07) 0%, transparent 65%);
          pointer-events: none;
        }

        .contact-inner {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        /* Section label */
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent-blue);
          margin-bottom: 24px;
        }

        .section-label::before,
        .section-label::after {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--accent-blue);
        }

        /* Heading */
        .contact-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(38px, 6vw, 72px);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -2px;
          color: var(--text-bright);
          margin: 0 0 24px;
        }

        .contact-heading .hl {
          display: block;
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        /* Underline decoration */
        .contact-heading .hl::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-blue), var(--accent-cyan), transparent);
          opacity: 0.4;
          border-radius: 2px;
        }

        /* Subtext */
        .contact-sub {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--text-muted);
          max-width: 480px;
          margin: 0 auto 48px;
        }

        /* Availability pill */
        .avail-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 100px;
          padding: 6px 14px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #4ade80;
          margin-bottom: 36px;
        }

        .avail-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px #22c55e;
          animation: pulse-g 2s ease-in-out infinite;
        }

        @keyframes pulse-g {
          0%, 100% { box-shadow: 0 0 5px #22c55e; }
          50% { box-shadow: 0 0 12px #22c55e; }
        }

        /* CTA area */
        .contact-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }

        /* Primary email button */
        .btn-email {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: white;
          background: linear-gradient(135deg, var(--navy-600), var(--accent-blue));
          border: none;
          padding: 16px 32px;
          border-radius: 100px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 28px var(--accent-glow);
          position: relative;
          overflow: hidden;
        }

        .btn-email::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-cyan));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 100px;
        }

        .btn-email:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(77, 142, 240, 0.55);
        }

        .btn-email:hover::before { opacity: 1; }
        .btn-email span, .btn-email svg { position: relative; z-index: 1; }

        /* Ghost button */
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--accent-blue);
          background: transparent;
          border: 1.5px solid var(--border-glow);
          padding: 15px 26px;
          border-radius: 100px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-ghost:hover {
          border-color: var(--accent-blue);
          background: rgba(77, 142, 240, 0.08);
          color: white;
          transform: translateY(-3px);
        }

        /* Divider */
        .contact-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }

        .contact-divider::before,
        .contact-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border-subtle);
        }

        .divider-text {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        /* Social row */
        .contact-socials {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .social-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: rgba(10, 26, 51, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          font-size: 13px;
          font-weight: 400;
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .social-card svg {
          color: var(--text-dim);
          transition: color 0.25s ease;
        }

        .social-card:hover {
          border-color: var(--border-glow);
          background: rgba(77, 142, 240, 0.08);
          color: var(--text-bright);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .social-card:hover svg {
          color: var(--accent-blue);
        }

        @media (max-width: 640px) {
          .contact-section { padding: 100px 0 80px; }
          .contact-inner { padding: 0 1.25rem; }
          .contact-heading { letter-spacing: -1px; }
          .contact-actions { flex-direction: column; align-items: stretch; }
          .btn-email, .btn-ghost { justify-content: center; }
          .contact-socials { flex-direction: column; align-items: stretch; }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-inner">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="section-label">Get In Touch</div>

            <h2 className="contact-heading">
              Let's Build
              <span className="hl">Something Great.</span>
            </h2>

            <p className="contact-sub">
              Currently open to freelance projects, teaching opportunities,
              and technical collaborations. Let's make something worth shipping.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
              <div className="avail-pill">
                <div className="avail-dot" />
                Available for new opportunities
              </div>
            </div>

            <div className="contact-actions">
              <a href="mailto:your@email.com" className="btn-email">
                <Mail size={15} />
                <span>Say Hello</span>
                <ArrowUpRight size={14} />
              </a>
              <a href="#" className="btn-ghost">
                <MessageSquare size={14} />
                <span>Schedule a Call</span>
              </a>
            </div>

            <div className="contact-divider">
              <span className="divider-text">or find me on</span>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/yourusername" className="social-card">
                <Github size={16} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" className="social-card">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Contact;