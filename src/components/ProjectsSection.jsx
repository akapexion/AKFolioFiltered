import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Campus Connect",
      desc: "A centralized event management ecosystem. Integrated real-time notifications and role-based access control for 10,000+ potential campus users.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1523240715630-97fbb02128b7?auto=format&fit=crop&q=80&w=800",
      github: "#",
      live: "#",
      number: "01",
    },
    {
      title: "Student Support System",
      desc: "A ticketing resolution platform built to streamline faculty-student communication. Reduced issue resolution time by 40% through automated routing.",
      tech: ["React.js", "Firebase", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      github: "#",
      live: "#",
      number: "02",
    },
    {
      title: "Revy Cars",
      desc: "A premium automotive showcase platform focusing on high-fidelity UI/UX and smooth performance metrics for car enthusiasts.",
      tech: ["Next.js", "Three.js", "Tailwind", "GSAP"],
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
      github: "#",
      live: "#",
      number: "03",
    },
  ];

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

        .projects-section {
          padding: 120px 0;
          background: var(--navy-950);
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* Grid bg */
        .projects-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(77, 142, 240, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77, 142, 240, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* Top-right decorative glow */
        .projects-glow {
          position: absolute;
          top: -60px;
          right: -80px;
          width: 500px;
          height: 500px;
          background: radial-gradient(ellipse, rgba(77, 142, 240, 0.07) 0%, transparent 65%);
          pointer-events: none;
        }

        .projects-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        /* Header */
        .projects-header {
          margin-bottom: 64px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 16px;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent-blue);
          margin-bottom: 14px;
        }

        .section-label::before {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--accent-blue);
        }

        .projects-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 800;
          letter-spacing: -1.5px;
          color: var(--text-bright);
          margin: 0;
          line-height: 1.05;
        }

        .projects-heading .hl {
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header-github-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
          text-decoration: none;
          border: 1px solid var(--border-subtle);
          padding: 8px 16px;
          border-radius: 100px;
          transition: all 0.25s ease;
          white-space: nowrap;
          align-self: flex-end;
        }

        .header-github-link:hover {
          color: var(--accent-blue);
          border-color: var(--border-glow);
          background: rgba(77, 142, 240, 0.07);
        }

        /* Projects grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* Project card */
        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: rgba(10, 26, 51, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .project-card:hover {
          border-color: var(--border-glow);
          box-shadow: 0 16px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--border-subtle);
          transform: translateY(-6px);
        }

        /* Image */
        .card-img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease, filter 0.5s ease;
          filter: grayscale(40%) brightness(0.75);
        }

        .project-card:hover .card-img {
          transform: scale(1.08);
          filter: grayscale(0%) brightness(0.85);
        }

        /* Project number overlay */
        .card-number {
          position: absolute;
          top: 14px;
          left: 16px;
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.5);
          background: rgba(5, 15, 31, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-subtle);
          padding: 4px 10px;
          border-radius: 100px;
          z-index: 2;
        }

        /* Hover overlay with links */
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(19, 48, 96, 0.7), rgba(2, 9, 23, 0.75));
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .project-card:hover .card-overlay {
          opacity: 1;
        }

        .overlay-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(5, 15, 31, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-glow);
          border-radius: 12px;
          color: var(--text-bright);
          text-decoration: none;
          transition: all 0.25s ease;
          transform: translateY(8px);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .project-card:hover .overlay-btn {
          transform: translateY(0);
          opacity: 1;
        }

        .project-card:hover .overlay-btn:nth-child(2) {
          transition-delay: 0.07s;
        }

        .overlay-btn:hover {
          background: var(--accent-blue);
          border-color: var(--accent-blue);
          box-shadow: 0 0 20px var(--accent-glow);
        }

        /* Bottom gradient on image */
        .card-img-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(transparent, rgba(10, 26, 51, 0.9));
          z-index: 1;
        }

        /* Card body */
        .card-body {
          padding: 24px 26px 26px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .card-icon {
          color: var(--accent-blue);
          flex-shrink: 0;
          transition: color 0.25s ease;
        }

        .project-card:hover .card-icon {
          color: var(--accent-cyan);
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--text-bright);
          letter-spacing: -0.3px;
          transition: color 0.25s ease;
        }

        .project-card:hover .card-title {
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 20px;
          flex-grow: 1;
        }

        /* Tech tags */
        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .tech-tag {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--accent-blue);
          background: rgba(77, 142, 240, 0.08);
          border: 1px solid var(--border-subtle);
          padding: 4px 10px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .project-card:hover .tech-tag {
          border-color: rgba(77, 142, 240, 0.22);
          background: rgba(77, 142, 240, 0.12);
        }

        /* Bottom CTA */
        .projects-cta {
          margin-top: 72px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .cta-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(180deg, var(--accent-blue), transparent);
        }

        .cta-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        .cta-github {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: var(--text-bright);
          text-decoration: none;
          padding: 12px 24px;
          border: 1px solid var(--border-subtle);
          border-radius: 100px;
          transition: all 0.3s ease;
        }

        .cta-github:hover {
          color: var(--accent-cyan);
          border-color: var(--border-glow);
          background: rgba(77, 142, 240, 0.07);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }

        .cta-github svg {
          transition: transform 0.25s ease;
        }

        .cta-github:hover svg {
          transform: translate(2px, -2px);
        }

        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .projects-section { padding: 80px 0; }
          .projects-inner { padding: 0 1.25rem; }
          .projects-grid { grid-template-columns: 1fr; }
          .projects-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section id="projects" className="projects-section">
        <div className="projects-glow" />

        <div className="projects-inner">

          {/* Header */}
          <div className="projects-header">
            <div>
              <motion.div
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                My Portfolio
              </motion.div>
              <motion.h2
                className="projects-heading"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Recent <span className="hl">Works.</span>
              </motion.h2>
            </div>

            <a href="https://github.com" className="header-github-link">
              <Github size={14} />
              View All on GitHub
            </a>
          </div>

          {/* Grid */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Image */}
                <div className="card-img-wrap">
                  <span className="card-number">{project.number}</span>
                  <img src={project.image} alt={project.title} className="card-img" />
                  <div className="card-img-fade" />
                  <div className="card-overlay">
                    <a href={project.github} className="overlay-btn" aria-label="GitHub">
                      <Github size={18} />
                    </a>
                    <a href={project.live} className="overlay-btn" aria-label="Live Demo">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Body */}
                <div className="card-body">
                  <div className="card-title-row">
                    <Code2 size={16} className="card-icon" />
                    <h3 className="card-title">{project.title}</h3>
                  </div>
                  <p className="card-desc">{project.desc}</p>
                  <div className="card-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="projects-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-line" />
            <span className="cta-label">Want to see more?</span>
            <a href="https://github.com" className="cta-github">
              <Github size={16} />
              Explore My GitHub
              <ExternalLink size={14} />
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Projects;