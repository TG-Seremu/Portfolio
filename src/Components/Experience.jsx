import { motion } from "framer-motion";

const experiences = [
  {
    type: "work",
    title: "Freelance Web Developer",
    organization: "Self Employed",
    period: "Late 2023 — Present",
    description:
      "Building and designing websites for different companies and individuals. Handling everything from client communication to design, development and delivery.",
    tags: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    icon: "💼",
  },
  {
    type: "education",
    title: "The Complete Full-Stack Web Development Bootcamp",
    organization: "Udemy — Angela Yu",
    period: "Completed 2024",
    description:
      "Completed a comprehensive full stack bootcamp covering frontend, backend, databases, APIs, authentication and deployment. Built multiple real world projects throughout the course.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    icon: "🎓",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-28 bg-[#050a14] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
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
            Experience
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-sky-500/40 to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-12">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-500/40 via-blue-500/20 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative flex gap-8 pl-16"
            >
              {/* Icon bubble */}
              <div className="absolute left-0 w-12 h-12 rounded-full bg-[#0d1b2e] border-2 border-sky-500/40 flex items-center justify-center text-xl shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                {exp.icon}
              </div>

              {/* Card */}
              <div className="flex-1 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-500/30 transition-all duration-300 hover:bg-sky-500/5 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3
                      className="text-white font-black text-lg"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {exp.title}
                    </h3>
                    <p className="text-sky-400 text-sm font-mono">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
          className="text-center text-slate-500 text-sm font-mono mt-16"
        >
          🚀 Currently open to{" "}
          <span className="text-sky-400">junior developer roles</span> &{" "}
          <span className="text-sky-400">freelance opportunities</span>
        </motion.p>
      </div>
    </section>
  );
}