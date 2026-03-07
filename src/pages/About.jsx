import { motion } from "framer-motion";

const About = () => {
  const skills = ['React / Next.js', 'Node / Express', 'MongoDB', 'UI/UX Design'];

  return (
    <section id="about" className="relative py-[120px] bg-[#020917] overflow-hidden font-outfit sm:py-20">
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

          <h2 className="font-[syne] text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] text-[#e8f0ff] mb-7 -tracking-[1px]">
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
                <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-[#3d5278]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 mb-10">
            <p className="text-[15px] font-light leading-[1.85] font-[poppins] text-[#6b84ad]">
              I am a <span className="text-[#e8f0ff] font-medium">Full-Stack Engineer</span> specializing
              in the MERN ecosystem, with over 2.5 years of experience building
              scalable applications.
            </p>
            <p className="text-[15px] font-light font-[poppins] leading-[1.85] text-[#6b84ad]">
              Currently, as an <span className="text-[#38bdf8] font-medium">Associate Faculty at Aptech</span>,
              I dedicate my time to shaping the next wave of developers, focusing on
              industry-standard workflows and career placements.
            </p>
          </div>

          <div className="w-12 h-[2px] bg-gradient-to-r from-[#4d8ef0] to-transparent mb-7" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {skills.map(skill => (
              <div key={skill} className="flex items-center gap-2.5 p-3.5 bg-[#0a1a33]/70 border border-[#4d8ef0]/12 rounded-[10px] font-mono text-[11px] text-[#6b84ad] transition-all duration-250 hover:border-[#4d8ef0]/28 hover:bg-[#4d8ef0]/7 hover:text-[#e8f0ff] hover:translate-x-1 cursor-default">
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
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
            alt="Workspace"
            className="relative z-10 w-full h-[420px] object-cover rounded-2xl border border-[#4d8ef0]/12 filter grayscale-[60%] brightness-[0.85] transition-all duration-500 hover:grayscale-0 hover:brightness-100 hover:border-[#4d8ef0]/28"
          />

          <div className="absolute bottom-5 left-5 z-30 bg-[#050f1f]/92 backdrop-blur-md border border-[#4d8ef0]/28 rounded-xl p-3 flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e] animate-pulse shrink-0" />
            <div className="font-mono text-[10px] uppercase text-[#6b84ad] leading-[1.4]">
              <strong className="block text-[#e8f0ff] text-[12px] tracking-[0.5px]">Open to Work</strong>
              Karachi, PK · Remote
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;