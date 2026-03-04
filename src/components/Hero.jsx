import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';

const Hero = () => {
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
          --border-glow: rgba(77, 142, 240, 0.3);
        }

        .hero-section {
          min-height: 100vh;
          background: var(--navy-950);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 5vw;
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* Background grid */
        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(77, 142, 240, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77, 142, 240, 0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* Radial glow behind name */
        .hero-section::after {
          content: '';
          position: absolute;
          top: 30%;
          left: 10%;
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(77, 142, 240, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
        }

        /* Status badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(10, 26, 51, 0.9);
          border: 1px solid var(--border-glow);
          border-radius: 100px;
          padding: 6px 14px 6px 8px;
          margin-bottom: 32px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-muted);
          animation: fadeSlideUp 0.6s ease both;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px #22c55e;
          animation: pulse-green 2s ease-in-out infinite;
        }

        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 6px #22c55e; }
          50% { box-shadow: 0 0 14px #22c55e; }
        }

        /* Heading */
        .hero-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(56px, 9vw, 110px);
          font-weight: 800;
          line-height: 0.92;
          letter-spacing: -2px;
          text-transform: uppercase;
          color: var(--text-bright);
          margin: 0 0 8px;
          animation: fadeSlideUp 0.7s 0.1s ease both;
        }

        .hero-heading-accent {
          display: block;
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .hero-heading-accent::after {
          content: 'KHAN';
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: blur(28px);
          opacity: 0.4;
          z-index: -1;
        }

        /* Divider line */
        .hero-divider {
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-blue), transparent);
          margin: 28px 0;
          animation: fadeSlideUp 0.7s 0.2s ease both;
        }

        /* Description */
        .hero-desc {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(15px, 1.5vw, 18px);
          font-weight: 300;
          line-height: 1.75;
          color: var(--text-muted);
          max-width: 580px;
          animation: fadeSlideUp 0.7s 0.3s ease both;
        }

        .hero-desc .highlight-gold {
          color: var(--accent-cyan);
          font-weight: 500;
        }

        .hero-desc .highlight-blue {
          color: var(--accent-blue);
          font-weight: 500;
        }

        /* Actions row */
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 44px;
          flex-wrap: wrap;
          animation: fadeSlideUp 0.7s 0.4s ease both;
        }

        /* Primary CTA */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: white;
          background: linear-gradient(135deg, var(--navy-600), var(--accent-blue));
          border: none;
          padding: 14px 26px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px var(--accent-glow);
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-cyan));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 100px;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(77, 142, 240, 0.5);
        }

        .btn-primary:hover::before {
          opacity: 1;
        }

        .btn-primary span, .btn-primary svg {
          position: relative;
          z-index: 1;
        }

        /* Secondary CTA */
        .btn-secondary {
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
          padding: 13px 24px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          border-color: var(--accent-blue);
          background: rgba(77, 142, 240, 0.08);
          transform: translateY(-2px);
          color: white;
        }

        /* Social divider */
        .actions-divider {
          width: 1px;
          height: 32px;
          background: var(--border-subtle);
          margin: 0 4px;
        }

        /* Social icons */
        .social-icons {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dim);
          border-radius: 10px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.25s ease;
          background: transparent;
        }

        .social-icon:hover {
          color: var(--accent-blue);
          border-color: var(--border-glow);
          background: rgba(77, 142, 240, 0.08);
          transform: translateY(-2px);
        }

        /* Bottom scroll hint */
        .scroll-hint {
          position: absolute;
          bottom: 40px;
          left: 5vw;
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-dim);
          animation: fadeSlideUp 0.7s 0.6s ease both;
        }

        .scroll-line {
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, var(--accent-blue), transparent);
        }

        /* Floating tag top-right */
        .hero-tag {
          position: absolute;
          top: 36px;
          right: 5vw;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-dim);
          writing-mode: vertical-rl;
          text-orientation: mixed;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: fadeIn 1s 0.8s ease both;
        }

        .hero-tag::before {
          content: '';
          width: 1px;
          height: 60px;
          background: linear-gradient(180deg, var(--accent-blue), transparent);
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @media (max-width: 640px) {
          .hero-section { padding: 0 1.5rem; }
          .hero-tag { display: none; }
          .actions-divider { display: none; }
          .hero-heading { letter-spacing: -1px; }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-tag">MERN Stack · Full Stack</div>

        <div className="hero-inner">
          {/* Status badge */}
          <div className="hero-badge">
            <div className="badge-dot" />
            Available for work
          </div>

          {/* Name */}
          <h1 className="hero-heading">
            Asad
            <span className="hero-heading-accent">Khan</span>
          </h1>

          <div className="hero-divider" />

          {/* Description */}
          <p className="hero-desc">
            Associate Faculty at <span className="highlight-gold">Aptech</span> &amp; Former
            Software Developer at <span className="highlight-blue">Time Global Tech</span>.
            MERN Stack specialist focused on building scalable web solutions and
            mentoring the next generation of developers.
          </p>

          {/* Actions */}
          <div className="hero-actions">
            <button className="btn-primary">
              <Mail size={15} />
              <span>Get in Touch</span>
              <ArrowRight size={14} />
            </button>

            <button className="btn-secondary">
              <FileText size={14} />
              <span>Resume</span>
            </button>

            <div className="actions-divider" />

            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <div className="scroll-line" />
          Scroll to explore
        </div>
      </section>
    </>
  );
};

export default Hero;