import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Bridging Code & <span className="text-emerald-500">Mentorship.</span>
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
            <p>I am a <span className="text-white font-medium">Full-Stack Engineer</span> specializing in the MERN ecosystem, with over 2.5 years of experience building scalable applications.</p>
            <p>Currently, as an <span className="text-emerald-400">Associate Faculty at Aptech</span>, I dedicate my time to shaping the next wave of developers, focusing on industry-standard workflows and career placements.</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {['React / Next.js', 'Node / Express', 'MongoDB', 'UI/UX Design'].map(skill => (
                <div key={skill} className="flex items-center gap-2 text-sm font-mono text-emerald-500/80">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="relative group">
          <div className="absolute -inset-4 bg-emerald-500/20 rounded-2xl blur-2xl group-hover:bg-emerald-500/30 transition duration-500" />
          <img 
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" 
            alt="Workspace" 
            className="relative rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition duration-500 object-cover h-[400px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;