import { motion } from "framer-motion";

const Experience = () => {
  const jobs = [
    { title: "Associate Faculty", company: "Aptech Pakistan", date: "Present", desc: "Leading student placements and technical mentorship." },
    { title: "Software Developer", company: "Time Global Tech", date: "2023 - 2024", desc: "Developed MERN stack solutions for international clients." },
    { title: "Faculty", company: "NAVTTC", date: "2022", desc: "Conducted technical training for vocational students." }
  ];

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-12 flex items-center gap-4">
          <span className="text-emerald-500 text-xl font-mono">02.</span> Experience
        </h2>
        <div className="space-y-12 border-l border-emerald-500/20 ml-4">
          {jobs.map((job, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="relative pl-10">
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#0a0a0a] border-2 border-emerald-500 rounded-full" />
              <span className="text-emerald-500 font-mono text-sm uppercase">{job.date}</span>
              <h3 className="text-xl font-bold text-white mt-1">{job.title} <span className="text-emerald-500/60 font-light">@ {job.company}</span></h3>
              <p className="text-slate-400 mt-2 max-w-2xl">{job.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Experience;