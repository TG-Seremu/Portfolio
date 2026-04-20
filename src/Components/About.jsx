import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const stats = [
  { value: "1+", label: "Years Learning" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-28 bg-[#050a14] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

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
            About Me
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-sky-500/40 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — Photo */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-600/10 rounded-2xl blur-2xl scale-95" />

            {/* Border frame */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl p-[2px] bg-gradient-to-br from-sky-400 to-blue-600">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#050a14]">
                <img
                  src={profileImg}
                  alt="Tadiwa Seremu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-[#0d1b2e] border border-sky-500/30 rounded-xl px-4 py-2 shadow-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-sky-400 font-mono text-xs">
                🌍 Zim raised in SA 
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Text */}
          <div className="flex flex-col gap-6">
            <motion.h3
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-black text-white leading-snug"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              A developer who loves turning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                ideas into reality
              </span>
            </motion.h3>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-slate-400 leading-relaxed"
            >
              Hey! I'm Tadiwa — a junior full stack developer born in Zimbabwe
              and raised in South Africa. I'm currently on my journey to
              becoming a well-rounded full stack developer, passionate about
              building clean, modern, and user-friendly web experiences.
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-slate-400 leading-relaxed"
            >
              I love the challenge of turning complex problems into simple,
              beautiful solutions. When I'm not coding, I'm learning something
              new, pushing my boundaries, and working towards my goals one
              commit at a time.
            </motion.p>

            {/* Tags */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {["React", "Node.js", "MongoDB", "Tailwind", "Git", "Python"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-sky-500/40 text-sky-400 text-sm font-semibold hover:bg-sky-500/10 hover:border-sky-400 transition-all duration-300 hover:scale-105"
              >
                <span>Download CV</span>
                <span>↓</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-500/30 transition-all duration-300 hover:bg-sky-500/5"
            >
              <span
                className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {stat.value}
              </span>
              <span className="text-slate-400 text-sm mt-1 text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}