const Skills = () => {
  const skills = [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "JavaScript",
    "Tailwind CSS",
    "Laravel",
    "REST APIs",
    "Git & GitHub"
  ];

  return (
    <section id="skills" className="py-20 bg-[#111827] px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1f2937] p-6 rounded-xl text-center hover:bg-cyan-500 hover:text-black transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;