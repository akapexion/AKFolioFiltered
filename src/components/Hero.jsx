import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-10 flex flex-col justify-center bg-slate-50 dark:bg-[#020917] transition-colors duration-300 px-[5vw] overflow-hidden font-['Outfit'] sm:px-6">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: `linear-gradient(#4d8ef0 1px, transparent 1px), linear-gradient(90deg, #4d8ef0 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
      </div>

      {/* Radial Glow */}
      <div className="absolute top-[30%] left-[10%] w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(77,142,240,0.08)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* Floating Tag (Right) */}
      <div className="absolute top-9 right-[5vw] hidden sm:flex flex-col items-center gap-[10px] text-[10px] tracking-[2px] uppercase text-[#3d5278] [writing-mode:vertical-rl] animate-in fade-in duration-1000 delay-700">
        <div className="w-[1px] h-[60px] bg-gradient-to-b from-[#4d8ef0] to-transparent" />
        MERN Stack · Full Stack
      </div>

      <div className="relative z-10 max-w-[1100px] animate-in fade-in slide-in-from-bottom-5 duration-700">

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-200 dark:bg-[#0a1a33]/90 border border-[#4d8ef0]/30 rounded-full py-1.5 pl-2 pr-3.5 mb-8 font-['DM_Mono'] text-[11px] tracking-[1.5px] uppercase text-slate-700 dark:text-[#6b84ad]">
          <div className="w-[7px] h-[7px] bg-[#22c55e] rounded-full shadow-[0_0_8px_#22c55e] animate-pulse" />
          Available for work
        </div>

        {/* Heading */}
        <h1 className="font-['Syne'] text-[clamp(56px,9vw,110px)] font-extrabold leading-[0.92] tracking-[-2px] uppercase text-slate-900 dark:text-[#e8f0ff] m-0 mb-2">
          Asad
          <span className="relative block bg-gradient-to-r from-[#4d8ef0] to-[#38bdf8] bg-clip-text text-transparent">
            Khan
            {/* Glow Layer */}
            <span className="absolute left-0 top-0 bg-gradient-to-r from-[#4d8ef0] to-[#38bdf8] bg-clip-text text-transparent blur-[28px] opacity-40 -z-10 select-none">
              Khan
            </span>
          </span>
        </h1>

        <div className="w-20 h-[2px] bg-gradient-to-r from-[#4d8ef0] to-transparent my-7" />

        {/* Description */}
        <p className="font-['Outfit'] text-[clamp(15px,1.5vw,18px)] font-light leading-relaxed text-slate-600 dark:text-[#6b84ad] max-w-[580px]">
          Associate Faculty at <span className="text-[#38bdf8] font-medium">Aptech</span> & Former
          Software Developer at <span className="text-[#4d8ef0] font-medium">Time Global Tech</span>.
          MERN Stack specialist focused on building scalable web solutions and
          mentoring the next generation of developers.
        </p>

        {/* Actions Row */}
        <div className="flex items-center gap-4 mt-11 flex-wrap">
          <button className="group relative overflow-hidden flex items-center gap-[10px] font-['Syne'] text-[12px] font-bold tracking-[1.5px] uppercase text-white bg-gradient-to-br from-[#133060] to-[#4d8ef0] px-[26px] py-[14px] rounded-full transition-all duration-300 shadow-[0_4px_24px_rgba(77,142,240,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(77,142,240,0.5)]">
            <span className="absolute inset-0 bg-gradient-to-r from-[#4d8ef0] to-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Mail size={15} className="relative z-10" />
            <span className="relative z-10">Get in Touch</span>
            <ArrowRight size={14} className="relative z-10" />
          </button>

          <button className="flex items-center gap-2 font-['Syne'] text-[12px] font-bold tracking-[1.5px] uppercase text-[#4d8ef0] bg-transparent border-[1.5px] border-[#4d8ef0]/30 px-6 py-[13px] rounded-full transition-all duration-300 hover:border-[#4d8ef0] hover:bg-[#4d8ef0]/10 hover:-translate-y-0.5 dark:hover:text-white">
            <FileText size={14} />
            <a href="./AsadKhan-FS-web-dev.pdf" target='_blank'>
              <span>
                Resume
              </span>
            </a>
          </button>

          <div className="hidden sm:block w-[1px] h-8 bg-[#4d8ef0]/10 mx-1" />

          <div className="flex items-center gap-1">
            <a href="https://github.com/akapexion" target='_blank' className="w-10 h-10 flex items-center justify-center text-slate-500 dark:text-[#3d5278] border border-transparent rounded-[10px] transition-all duration-300 hover:text-[#4d8ef0] hover:border-[#4d8ef0]/30 hover:bg-[#4d8ef0]/10 hover:-translate-y-0.5" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/asadklm/" target='_blank' className="w-10 h-10 flex items-center justify-center text-slate-500 dark:text-[#3d5278] border border-transparent rounded-[10px] transition-all duration-300 hover:text-[#4d8ef0] hover:border-[#4d8ef0]/30 hover:bg-[#4d8ef0]/10 hover:-translate-y-0.5" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;