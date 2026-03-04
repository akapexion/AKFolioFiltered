import { motion } from "framer-motion";

const About = () => {
  const skills = ['React / Next.js', 'Node / Express', 'MongoDB', 'UI/UX Design'];

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

        .about-section {
          padding: 120px 0;
          background: var(--navy-950);
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* Subtle grid */
        .about-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(77, 142, 240, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77, 142, 240, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
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
          margin-bottom: 20px;
        }

        .section-label::before {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--accent-blue);
        }

        /* Heading */
        .about-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          line-height: 1.1;
          color: var(--text-bright);
          margin: 0 0 28px;
          letter-spacing: -1px;
        }

        .about-heading .hl {
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Body text */
        .about-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        .about-body p {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.85;
          color: var(--text-muted);
          margin: 0;
        }

        .about-body .hl-white {
          color: var(--text-bright);
          font-weight: 500;
        }

        .about-body .hl-cyan {
          color: var(--accent-cyan);
          font-weight: 500;
        }

        /* Divider */
        .about-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-blue), transparent);
          margin-bottom: 28px;
        }

        /* Skills grid */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .skill-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(10, 26, 51, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          transition: all 0.25s ease;
        }

        .skill-chip:hover {
          border-color: var(--border-glow);
          background: rgba(77, 142, 240, 0.07);
          color: var(--text-bright);
          transform: translateX(4px);
        }

        .skill-dot {
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-cyan));
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 6px var(--accent-glow);
        }

        /* Image side */
        .about-image-wrap {
          position: relative;
        }

        /* Corner decorators */
        .corner {
          position: absolute;
          width: 20px;
          height: 20px;
          z-index: 2;
        }

        .corner-tl { top: -8px; left: -8px; border-top: 2px solid var(--accent-blue); border-left: 2px solid var(--accent-blue); }
        .corner-tr { top: -8px; right: -8px; border-top: 2px solid var(--accent-blue); border-right: 2px solid var(--accent-blue); }
        .corner-bl { bottom: -8px; left: -8px; border-bottom: 2px solid var(--accent-blue); border-left: 2px solid var(--accent-blue); }
        .corner-br { bottom: -8px; right: -8px; border-bottom: 2px solid var(--accent-blue); border-right: 2px solid var(--accent-blue); }

        /* Glow blob */
        .img-glow {
          position: absolute;
          inset: -16px;
          background: radial-gradient(ellipse, rgba(77, 142, 240, 0.18) 0%, transparent 70%);
          border-radius: 24px;
          transition: opacity 0.5s ease;
          z-index: 0;
        }

        .about-image-wrap:hover .img-glow {
          opacity: 1.5;
        }

        .about-img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 16px;
          border: 1px solid var(--border-subtle);
          filter: grayscale(60%) brightness(0.85);
          transition: filter 0.5s ease, border-color 0.5s ease;
          display: block;
        }

        .about-image-wrap:hover .about-img {
          filter: grayscale(0%) brightness(1);
          border-color: var(--border-glow);
        }

        /* Floating badge on image */
        .img-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 3;
          background: rgba(5, 15, 31, 0.92);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-glow);
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .img-badge-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px #22c55e;
          flex-shrink: 0;
          animation: pulse-g 2s ease-in-out infinite;
        }

        @keyframes pulse-g {
          0%, 100% { box-shadow: 0 0 6px #22c55e; }
          50% { box-shadow: 0 0 14px #22c55e; }
        }

        .img-badge-text {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .img-badge-text strong {
          display: block;
          color: var(--text-bright);
          font-size: 12px;
          letter-spacing: 0.5px;
        }

        /* Stats row */
        .about-stats {
          display: flex;
          gap: 32px;
          margin-bottom: 36px;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        @media (max-width: 1024px) {
          .about-inner { grid-template-columns: 1fr; gap: 48px; }
          .about-image-wrap { order: -1; }
        }

        @media (max-width: 640px) {
          .about-section { padding: 80px 0; }
          .about-inner { padding: 0 1.25rem; }
          .skills-grid { grid-template-columns: 1fr; }
          .about-stats { gap: 20px; }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-inner">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="section-label">About Me</div>

            <h2 className="about-heading">
              Bridging Code &amp; <span className="hl">Mentorship.</span>
            </h2>

            {/* Stats */}
            <div className="about-stats">
              {[
                { num: '2.5+', label: 'Years Exp.' },
                { num: '20+', label: 'Projects' },
                { num: '100+', label: 'Students' },
              ].map(s => (
                <div key={s.label} className="stat-item">
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="about-body">
              <p>
                I am a <span className="hl-white">Full-Stack Engineer</span> specializing
                in the MERN ecosystem, with over 2.5 years of experience building
                scalable applications.
              </p>
              <p>
                Currently, as an <span className="hl-cyan">Associate Faculty at Aptech</span>,
                I dedicate my time to shaping the next wave of developers, focusing on
                industry-standard workflows and career placements.
              </p>
            </div>

            <div className="about-divider" />

            <div className="skills-grid">
              {skills.map(skill => (
                <div key={skill} className="skill-chip">
                  <div className="skill-dot" />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="img-glow" />
            <div className="corner corner-tl" />
            <div className="corner corner-tr" />
            <div className="corner corner-bl" />
            <div className="corner corner-br" />

            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
              alt="Workspace"
              className="about-img"
            />

            <div className="img-badge">
              <div className="img-badge-dot" />
              <div className="img-badge-text">
                <strong>Open to Work</strong>
                Karachi, PK · Remote
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default About;