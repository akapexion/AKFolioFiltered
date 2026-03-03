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
    },
    {
      title: "Student Support System",
      desc: "A ticketing resolution platform built to streamline faculty-student communication. Reduced issue resolution time by 40% through automated routing.",
      tech: ["React.js", "Firebase", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      github: "#",
      live: "#",
    },
    {
      title: "Revy Cars",
      desc: "A premium automotive showcase platform focusing on high-fidelity UI/UX and smooth performance metrics for car enthusiasts.",
      tech: ["Next.js", "Three.js", "Tailwind", "GSAP"],
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
      github: "#",
      live: "#",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] px-6 relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-400 font-mono text-sm tracking-widest uppercase"
          >
            My Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mt-2"
          >
            Recent <span className="text-emerald-500">Works.</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-[#111111] rounded-3xl border border-white/5 overflow-hidden hover:border-emerald-500/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 transition-all">
                    <Github size={22} />
                  </a>
                  <a href={project.live} className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-emerald-500 transition-all">
                    <ExternalLink size={22} />
                  </a>
                </div>
                {/* Actual Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 size={18} className="text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[10px] font-mono font-semibold uppercase tracking-tighter bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="h-[1px] w-24 bg-emerald-500/30 mb-8" />
          <p className="text-slate-500 mb-6 text-sm">Want to see more of my code?</p>
          <a 
            href="https://github.com" 
            className="group flex items-center gap-2 text-white font-bold hover:text-emerald-400 transition-colors"
          >
            Explore My GitHub <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;  