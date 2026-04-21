import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project1 from "../assets/project1.png";
import project1b from "../assets/project1b.png";
import project1c from "../assets/project1c.png";
import project1d from "../assets/project1d.png";
import project1e from "../assets/project1e.png";
import project1f from "../assets/project1f.png";

const projects = [
  {
    title: "Tailwind & React App",
    description:
      "A fun project built from scratch to test Tailwind CSS and React skills. Features light/dark mode and is fully responsive across all screen sizes.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/TG-Seremu/Tailwindcss_React-project",
    live: null,
    images: [project1, project1b, project1c, project1d, project1e, project1f],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

function ProjectCard({ project, index }) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? project.images.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === project.images.length - 1 ? 0 : i + 1));

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-500/30 transition-all duration-300 overflow-hidden group"
    >
      {/* Image Carousel */}
      <div className="relative w-full h-56 overflow-hidden bg-[#0d1b2e]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={project.images[current]}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white text-sm flex items-center justify-center hover:bg-sky-500/70 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="w-8 h-8 rounded-full bg-black/50 backdrop-blur text-white text-sm flex items-center justify-center hover:bg-sky-500/70 transition-colors"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-sky-400 w-3" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/60 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <h3
          className="text-white font-black text-xl"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-600 text-slate-300 text-xs font-semibold hover:border-sky-500 hover:text-sky-400 transition-all duration-300"
          >
            GitHub →
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-semibold hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-28 bg-[#050a14] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-black text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Projects
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-sky-500/40 to-transparent" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-slate-400 max-w-xl mb-14 leading-relaxed"
        >
          Here are some of the projects I've built on my journey. More coming
          soon! 🚀
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}