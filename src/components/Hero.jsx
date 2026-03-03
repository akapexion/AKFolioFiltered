import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#0a0a0a]">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Profile Image with Animated Border */}
        <div className="relative w-32 h-32 md:w-44 md:h-44 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-emerald-500 blur-lg opacity-20 animate-pulse"></div>
          <img 
            src="https://via.placeholder.com/200" // Replace with your image link
            alt="AK Profile"
            className="rounded-full w-full h-full object-cover border-2 border-emerald-500/50 p-1 bg-[#0a0a0a]"
          />
        </div>

        <motion.h2 className="text-4xl md:text-7xl font-black mb-6 text-white tracking-tight">
          Crafting <span className="text-emerald-400">Digital</span> Experiences.
        </motion.h2>

        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
          MERN Stack Specialist & Associate Faculty. <br/> 
          I build <span className="text-white border-b border-emerald-500/30">scalable systems</span> and mentor the next generation of engineers.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            Start a Project
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;