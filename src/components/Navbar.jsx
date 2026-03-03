import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0a0a0a]/80 backdrop-blur-md z-[100] border-b border-emerald-500/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="p-1.5 bg-emerald-500 rounded-lg">
            <Terminal size={20} className="text-black" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">AK.DEV</span>
        </motion.div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </a>
          ))}
          <button className="px-5 py-2 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 rounded-full text-sm font-bold hover:bg-emerald-500 hover:text-black transition-all">
            Resume
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-emerald-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-emerald-500/10 p-6 md:hidden flex flex-col gap-4"
          >
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg text-slate-300 hover:text-emerald-400">{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar