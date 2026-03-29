import { motion } from "framer-motion";

const About = () => {
  const skills = ['MERN Stack', 'PHP & Laravel', 'SQL & NoSQL Databases', 'Git Version Control'];

  return (
    <section id="about" className="relative py-[120px] bg-slate-50 dark:bg-[#020917] transition-colors duration-300 overflow-hidden font-outfit sm:py-20">
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#4d8ef0 1px, transparent 1px), linear-gradient(90deg, #4d8ef0 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[3px] uppercase text-[#4d8ef0] mb-5">
            <div className="w-6 h-[1px] bg-[#4d8ef0]" />
            About Me
          </div>

          <h2 className="font-[syne] text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] text-slate-900 dark:text-[#e8f0ff] mb-7 -tracking-[1px]">
            Bridging Code & <span className="bg-gradient-to-r from-[#4d8ef0] to-[#38bdf8] bg-clip-text text-transparent">Mentorship.</span>
          </h2>

          {/* Stats */}
          <div className="flex gap-8 mb-9 pb-8 border-b border-[#4d8ef0]/12">
            {[
              { num: '2.5+', label: 'Years Exp.' },
              { num: '20+', label: 'Projects' },
              { num: '100+', label: 'Students' },
            ].map(s => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="font-[syne] text-[28px] font-extrabold bg-gradient-to-r from-[#4d8ef0] to-[#38bdf8] bg-clip-text text-transparent leading-none">
                  {s.num}
                </span>
                <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-slate-500 dark:text-[#3d5278]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <p className="text-[15px] font-light leading-[1.85] font-[poppins] text-slate-600 dark:text-[#6b84ad]">
              I am a <span className="text-slate-900 dark:text-[#e8f0ff] font-medium">Software Developer & Educator</span> specializing
              in Full Stack MERN development, technical sales, and academic instruction. I am passionate about building efficient solutions and mentoring future tech professionals.
            </p>
            <p className="text-[15px] font-light font-[poppins] leading-[1.85] text-slate-600 dark:text-[#6b84ad]">
              Currently, as an <span className="text-[#38bdf8] font-medium">Associate Faculty at Aptech</span>,
              I dedicate my time to shaping the next wave of developers, focusing on
              industry-standard workflows and career placements.
            </p>
          </div>

          <div className="w-12 h-[2px] bg-gradient-to-r from-[#4d8ef0] to-transparent mb-6" />

          {/* Education & Certifications */}
          <div className="mb-7">
            <h3 className="font-['Syne'] text-[16px] font-bold text-slate-800 dark:text-[#e8f0ff] mb-3">Education & Certifications</h3>
            <ul className="flex flex-col gap-2 font-['Outfit'] text-[13.5px] text-slate-600 dark:text-[#6b84ad]">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gradient-to-br from-[#4d8ef0] to-[#38bdf8] shrink-0" />
                <span><strong className="text-slate-700 dark:text-slate-300 font-medium">BSc Computer Science</strong> — University of Karachi (2022-2024)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gradient-to-br from-[#4d8ef0] to-[#38bdf8] shrink-0" />
                <span><strong className="text-slate-700 dark:text-slate-300 font-medium">Intermediate Engineering</strong> — Allama Iqbal Govt. College (2019-2021)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gradient-to-br from-[#4d8ef0] to-[#38bdf8] shrink-0" />
                <span><strong className="text-slate-700 dark:text-slate-300 font-medium">Web Design & Engineering</strong> — NAVTTC</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gradient-to-br from-[#4d8ef0] to-[#38bdf8] shrink-0" />
                <span><strong className="text-slate-700 dark:text-slate-300 font-medium">Mentorship Excellence</strong> — Techwiz 6, Aptech</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#22c55e] shrink-0 shadow-[0_0_6px_#22c55e]" />
                <span><strong>Volunteer:</strong> ICAN Peace Activist & SKMCH Fundraiser</span>
              </li>
            </ul>
          </div>

          <div className="w-12 h-[2px] bg-gradient-to-r from-[#4d8ef0] to-transparent mb-7" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {skills.map(skill => (
              <div key={skill} className="flex items-center gap-2.5 p-3.5 bg-slate-100 dark:bg-[#0a1a33]/70 border border-slate-200 dark:border-[#4d8ef0]/12 rounded-[10px] font-mono text-[11px] text-slate-600 dark:text-[#6b84ad] transition-all duration-250 hover:border-[#4d8ef0]/28 dark:hover:bg-[#4d8ef0]/7 text-slate-900 dark:hover:text-[#e8f0ff] hover:translate-x-1 cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#4d8ef0] to-[#38bdf8] shadow-[0_0_6px_rgba(77,142,240,0.35)] shrink-0" />
                {skill}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image side */}
        <motion.div
          className="relative lg:order-last order-first"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-[radial-gradient(ellipse,rgba(77,142,240,0.18)_0%,transparent_70%)] rounded-2xl opacity-0 transition-opacity duration-500 hover:opacity-150" />

          {/* Corners */}
          <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#4d8ef0] z-20" />
          <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-[#4d8ef0] z-20" />
          <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-[#4d8ef0] z-20" />
          <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#4d8ef0] z-20" />

          <img
            src="./asadkhan.jpeg"
            alt="Workspace"
            className="relative z-10 w-full h-[420px] object-cover rounded-2xl border border-[#4d8ef0]/12 filter grayscale-[60%] brightness-[0.85] transition-all duration-500 hover:grayscale-0 hover:brightness-100 hover:border-[#4d8ef0]/28"
          />

          <div className="absolute bottom-5 left-5 z-30 bg-white/95 dark:bg-[#050f1f]/92 backdrop-blur-md border border-slate-200 dark:border-[#4d8ef0]/28 rounded-xl p-3 flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e] animate-pulse shrink-0" />
            <div className="font-mono text-[10px] uppercase text-slate-500 dark:text-[#6b84ad] leading-[1.4]">
              <strong className="block text-slate-800 dark:text-[#e8f0ff] text-[12px] tracking-[0.5px]">Open to Work</strong>
              Karachi, PK · Remote
            </div>
          </div>

          {/* Rotating Badge */}
          <div className="absolute -bottom-6 -right-6 z-40 hidden sm:flex items-center justify-center w-[130px] h-[130px]">
             <motion.div 
               className="absolute w-full h-full text-[#4d8ef0]"
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
             >
               <svg viewBox="0 0 100 100" className="w-full h-full font-['Syne'] font-extrabold text-[11px] tracking-[3.5px] uppercase drop-shadow-[0_0_8px_rgba(77,142,240,0.4)]">
                 <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                 <text fill="currentColor">
                   <textPath href="#circlePath" startOffset="0%">
                     MERN STACK EXPERT • APTECH FACULTY •
                   </textPath>
                 </text>
               </svg>
             </motion.div>
             <div className="absolute w-2 h-2 rounded-full bg-[#4d8ef0] shadow-[0_0_12px_#4d8ef0]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;