import { motion } from "framer-motion";

const Contact = () => {
  return (
    <footer id="contact" className="bg-[#050505] pt-24 pb-12 px-6 border-t border-emerald-500/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Let's build <span className="text-emerald-500 underline decoration-emerald-500/20">something great.</span></h2>
        <p className="text-slate-500 mb-10 max-w-lg mx-auto">Currently open to freelance projects, teaching opportunities, and technical collaborations.</p>
        
        <a 
          href="mailto:your@email.com" 
          className="inline-block px-10 py-4 bg-emerald-500 text-black font-black rounded-full hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-1"
        >
          Say Hello
        </a>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-black text-white">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-black font-bold">AK</div>
            AK.DEV
          </div>
          <div className="flex gap-8 text-slate-500 text-sm font-mono">
            <a href="#" className="hover:text-emerald-400">GITHUB</a>
            <a href="#" className="hover:text-emerald-400">LINKEDIN</a>
            <a href="#" className="hover:text-emerald-400">TWITTER</a>
          </div>
          <p className="text-slate-600 text-xs uppercase tracking-widest italic">© 2026 Crafted with Passion</p>
        </div>
      </div>
    </footer>
  );
};


export default Contact;