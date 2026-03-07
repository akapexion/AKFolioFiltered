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
    <section id="experience" className="relative py-[120px] bg-[#050f1f] overflow-hidden font-['Outfit'] sm:py-20">
      
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: `linear-gradient(#4d8ef0 1px, transparent 1px), linear-gradient(90deg, #4d8ef0 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div className="absolute top-1/5 -right-[100px] w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(77,142,240,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[900px] mx-auto px-8 sm:px-5">
        
        {/* Header */}
        <div className="inline-flex items-center gap-2 font-['DM_Mono'] text-[10px] tracking-[3px] uppercase text-[#4d8ef0] mb-4 before:content-[''] before:w-6 before:h-[1px] before:bg-[#4d8ef0]">
          Career
        </div>
        <h2 className="font-['Syne'] text-[clamp(32px,4vw,48px)] font-extrabold tracking-tighter text-[#e8f0ff] mb-16 leading-[1.1]">
          Work <span className="bg-gradient-to-r from-[#4d8ef0] to-[#38bdf8] bg-clip-text text-transparent">Experience</span>
        </h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col gap-0 before:content-[''] before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-[#4d8ef0] before:via-[#4d8ef0]/10 before:to-transparent sm:before:left-[15px]">
          
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-[40px_1fr] gap-6 pb-12 relative group last:pb-0 sm:grid-cols-[32px_1fr] sm:gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Timeline Node */}
              <div className="relative z-10 pt-1.5 flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#050f1f] border-2 border-[#4d8ef0] shadow-[0_0_10px_rgba(77,142,240,0.35)] shrink-0 transition-all duration-300 group-hover:bg-[#4d8ef0] group-hover:scale-120 group-hover:shadow-[0_0_20px_rgba(77,142,240,0.35)]" />
              </div>

              {/* Card */}
              <div className="relative overflow-hidden bg-[#0a1a33]/50 border border-[#4d8ef0]/10 rounded-2xl p-7 transition-all duration-300 group-hover:border-[#4d8ef0]/30 group-hover:bg-[#0a1a33]/80 group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] group-hover:translate-x-1 sm:p-5 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-gradient-to-b before:from-[#4d8ef0] before:to-[#38bdf8] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity">
                
                <div className="flex justify-between items-start gap-4 mb-1.5 flex-wrap">
                  <h3 className="font-['Syne'] text-[22px] font-extrabold tracking-tight text-[#e8f0ff] leading-none sm:text-lg">
                    {job.company}
                  </h3>
                  
                  {job.tag && (
                    <span className="font-['DM_Mono'] text-[9px] tracking-[2px] uppercase text-[#22c55e] bg-[#22c55e]/10 border border-[#22c55e]/25 px-2.5 py-1 rounded-full flex items-center gap-1.5 shrink-0">
                      <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full shadow-[0_0_6px_#22c55e] animate-pulse" />
                      {job.tag}
                    </span>
                  )}
                </div>

                <div className="font-['DM_Mono'] text-xs tracking-[1.5px] uppercase text-[#4d8ef0] mb-1">
                  {job.role}
                </div>
                <div className="font-['DM_Mono'] text-[11px] tracking-wider text-[#3d5278] mb-4">
                  {job.period}
                </div>
                
                <p className="text-sm font-light leading-relaxed text-[#6b84ad] mb-5">
                  {job.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {job.skills.map(skill => (
                    <span key={skill} className="font-['DM_Mono'] text-[10px] tracking-wider text-[#3d5278] bg-[#4d8ef0]/5 border border-[#4d8ef0]/10 px-2.5 py-1 rounded-md transition-colors group-hover:border-[#4d8ef0]/20 group-hover:text-[#6b84ad]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;