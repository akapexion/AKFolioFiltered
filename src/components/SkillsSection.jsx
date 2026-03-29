import { motion } from "framer-motion";
import { Layout, Server, Terminal } from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "Frontend & UI",
      icon: Layout,
      description: "Crafting responsive, performant user interfaces with modern styling frameworks.",
      tech: ["React", "Tailwind CSS", "DaisyUI"],
    },
    {
      title: "Backend & Databases",
      icon: Server,
      description: "Building robust APIs and scalable server-side architectures.",
      tech: ["Node.js", "Express", "Raw PHP", "Laravel", "SQL", "NoSQL Databases"],
    },
    {
      title: "Tools & AI",
      icon: Terminal,
      description: "Leveraging version control and advanced AI to turbocharge development workflows.",
      tech: ["Git", "GitHub", "Claude", "Gemini", "Grok", "Perplexity"],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600&display=swap');

        .skills-section {
          padding: 120px 0;
          background: var(--navy-900);
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        .skills-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(var(--accent-blue-rgb), 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--accent-blue-rgb), 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .skills-section::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(var(--accent-blue-rgb), 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .skills-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent-blue);
          margin-bottom: 16px;
        }

        .section-label::before {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--accent-blue);
        }

        .skills-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          letter-spacing: -1px;
          color: var(--text-bright);
          margin: 0 0 64px;
          line-height: 1.1;
        }

        .skills-heading .hl {
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Cards grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .skill-card {
          position: relative;
          background: rgba(var(--navy-800-rgb), 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          padding: 32px;
          overflow: hidden;
          transition: all 0.35s ease;
          cursor: default;
        }

        /* Top gradient bar — hidden by default */
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan));
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .skill-card::after {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 120px;
          height: 120px;
          background: radial-gradient(ellipse, rgba(var(--accent-blue-rgb), 0.12) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .skill-card:hover {
          border-color: var(--border-glow);
          background: rgba(var(--navy-800-rgb), 0.85);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.1), 0 0 0 1px var(--border-subtle);
          transform: translateY(-6px);
        }

        .skill-card:hover::before { opacity: 1; }
        .skill-card:hover::after  { opacity: 1; }

        /* Icon box */
        .card-icon-box {
          width: 46px;
          height: 46px;
          background: rgba(var(--accent-blue-rgb), 0.1);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-blue);
          margin-bottom: 20px;
          transition: all 0.35s ease;
        }

        .skill-card:hover .card-icon-box {
          background: rgba(var(--accent-blue-rgb), 0.16);
          border-color: var(--border-glow);
          box-shadow: 0 0 16px rgba(var(--accent-blue-rgb), 0.2);
          color: var(--accent-cyan);
        }

        /* Card title */
        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--text-bright);
          margin: 0 0 10px;
          letter-spacing: -0.3px;
          transition: color 0.25s ease;
        }

        /* Card description */
        .card-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.75;
          color: var(--text-dim);
          margin-bottom: 24px;
          transition: color 0.25s ease;
        }

        .skill-card:hover .card-desc {
          color: var(--text-muted);
        }

        /* Divider */
        .card-divider {
          height: 1px;
          background: var(--border-subtle);
          margin-bottom: 20px;
          transition: background 0.35s ease;
        }

        .skill-card:hover .card-divider {
          background: var(--border-glow);
        }

        /* Tech chips */
        .card-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-chip {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-muted);
          background: rgba(var(--accent-blue-rgb), 0.06);
          border: 1px solid var(--border-subtle);
          padding: 6px 12px;
          border-radius: 8px;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-card:hover .tech-chip {
          color: var(--text-bright);
          border-color: rgba(var(--accent-blue-rgb), 0.22);
          background: rgba(var(--accent-blue-rgb), 0.1);
        }

        .tech-chip:hover {
          color: var(--accent-cyan) !important;
          border-color: var(--accent-cyan) !important;
          background: rgba(var(--accent-cyan-rgb), 0.08) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(var(--accent-cyan-rgb), 0.12);
        }

        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .skills-section { padding: 80px 0; }
          .skills-inner { padding: 0 1.25rem; }
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="skills" className="skills-section">
        <div className="skills-inner">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="section-label">Expertise</div>
          </motion.div>

          <motion.h2
            className="skills-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My <span className="hl">Tech Stack.</span>
          </motion.h2>

          <div className="skills-grid">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={i}
                  className="skill-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="card-icon-box">
                    <Icon size={20} />
                  </div>

                  <h3 className="card-title">{cat.title}</h3>
                  <p className="card-desc">{cat.description}</p>

                  <div className="card-divider" />

                  <div className="card-chips">
                    {cat.tech.map((t) => (
                      <span key={t} className="tech-chip">{t}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;