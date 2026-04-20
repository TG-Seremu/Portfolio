import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 75 },
      { name: "HTML & CSS", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Tailwind CSS", level: 70 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "Express.js", level: 60 },
      { name: "MongoDB", level: 60 },
      { name: "Python", level: 55 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 70 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 50 },
      { name: "REST APIs", level: 65 },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-sky-400 font-mono text-xs">{level}%</span>
      </div>
      {/* Bar track */}
      <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-28 bg-[#050a14] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-black text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Skills
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-sky-500/40 to-transparent" />
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-slate-400 max-w-xl mb-14 leading-relaxed"
        >
          Here's a snapshot of the technologies I work with. I'm always
          learning and adding new tools to my stack.
        </motion.p>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              custom={catIndex}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-500/30 transition-all duration-300 hover:bg-sky-500/5 group"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3
                  className="text-white font-black text-lg"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-5">
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-500 text-sm font-mono mt-14"
        >
          💡 Always learning — currently exploring{" "}
          <span className="text-sky-400">Next.js</span> &{" "}
          <span className="text-sky-400">TypeScript</span>
        </motion.p>
      </div>
    </section>
  );
}