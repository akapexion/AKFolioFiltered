import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";

const Experience = () => {
  const jobs = [
    {
      company: "Aptech",
      role: "Associate Faculty",
      period: "Early 2026 — Present",
      tag: "Current",
      description:
        "Leading technical modules for MERN stack development, mentoring students through semester projects, and managing curriculum delivery.",
      skills: ["React", "Node.js", "MongoDB", "Curriculum Design"],
    },
    {
      company: "Time Global Tech",
      role: "Software Developer",
      period: "Previous",
      tag: null,
      description:
        "Developed and maintained production-level web applications using MongoDB, Express, React, and Node.js.",
      skills: ["Express", "REST APIs", "React", "MongoDB"],
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

        .exp-section {
          padding: 120px 0;
          background: var(--navy-900);
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* Subtle grid */
        .exp-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(77, 142, 240, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77, 142, 240, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        /* Side glow */
        .exp-section::after {
          content: '';
          position: absolute;
          top: 20%;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(77, 142, 240, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .exp-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem;
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
          margin-bottom: 16px;
        }

        .section-label::before {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--accent-blue);
        }

        .exp-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          letter-spacing: -1px;
          color: var(--text-bright);
          margin: 0 0 64px;
          line-height: 1.1;
        }

        .exp-heading span {
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Timeline */
        .timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Vertical line */
        .timeline::before {
          content: '';
          position: absolute;
          left: 19px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: linear-gradient(180deg, var(--accent-blue), var(--border-subtle), transparent);
        }

        /* Each job card */
        .job-item {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 24px;
          padding-bottom: 48px;
          position: relative;
        }

        .job-item:last-child {
          padding-bottom: 0;
        }

        /* Timeline node */
        .timeline-node {
          position: relative;
          z-index: 1;
          padding-top: 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .node-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--navy-900);
          border: 2px solid var(--accent-blue);
          box-shadow: 0 0 10px var(--accent-glow);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .job-item:hover .node-dot {
          background: var(--accent-blue);
          box-shadow: 0 0 20px var(--accent-glow);
          transform: scale(1.2);
        }

        /* Card */
        .job-card {
          background: rgba(10, 26, 51, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 28px 32px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .job-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--accent-blue), var(--accent-cyan));
          border-radius: 3px 0 0 3px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .job-item:hover .job-card {
          border-color: var(--border-glow);
          background: rgba(10, 26, 51, 0.8);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--border-subtle);
          transform: translateX(4px);
        }

        .job-item:hover .job-card::before {
          opacity: 1;
        }

        /* Card header */
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 6px;
          flex-wrap: wrap;
        }

        .job-company {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--text-bright);
          line-height: 1;
        }

        .job-tag-current {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #22c55e;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.25);
          padding: 4px 10px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .tag-dot {
          width: 5px;
          height: 5px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 6px #22c55e;
          animation: pulse-g 2s ease-in-out infinite;
        }

        @keyframes pulse-g {
          0%, 100% { box-shadow: 0 0 4px #22c55e; }
          50% { box-shadow: 0 0 10px #22c55e; }
        }

        .job-role {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--accent-blue);
          margin-bottom: 4px;
        }

        .job-period {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 1px;
          color: var(--text-dim);
          margin-bottom: 16px;
        }

        .job-desc {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        /* Skill tags */
        .job-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 1px;
          color: var(--text-dim);
          background: rgba(77, 142, 240, 0.06);
          border: 1px solid var(--border-subtle);
          padding: 4px 10px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .job-item:hover .skill-tag {
          border-color: rgba(77, 142, 240, 0.2);
          color: var(--text-muted);
        }

        @media (max-width: 640px) {
          .exp-section { padding: 80px 0; }
          .exp-inner { padding: 0 1.25rem; }
          .job-card { padding: 20px; }
          .job-company { font-size: 18px; }
          .timeline::before { left: 15px; }
          .job-item { grid-template-columns: 32px 1fr; gap: 16px; }
        }
      `}</style>

      <section id="experience" className="exp-section">
        <div className="exp-inner">

          <div className="section-label">Career</div>
          <h2 className="exp-heading">
            Work <span>Experience</span>
          </h2>

          <div className="timeline">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className="job-item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Timeline node */}
                <div className="timeline-node">
                  <div className="node-dot" />
                </div>

                {/* Card */}
                <div className="job-card">
                  <div className="job-header">
                    <span className="job-company">{job.company}</span>
                    {job.tag && (
                      <span className="job-tag-current">
                        <span className="tag-dot" />
                        {job.tag}
                      </span>
                    )}
                  </div>

                  <div className="job-role">{job.role}</div>
                  <div className="job-period">{job.period}</div>
                  <p className="job-desc">{job.description}</p>

                  <div className="job-skills">
                    {job.skills.map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Experience;