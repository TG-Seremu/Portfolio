import { useState } from "react";
import { motion } from "framer-motion";

const socials = [
  {
    label: "Gmail",
    value: "geraldseremu5@gmail.com",
    href: "mailto:geraldseremu5@gmail.com",
    icon: "📧",
  },
  {
    label: "LinkedIn",
    value: "gerald-seremu",
    href: "https://www.linkedin.com/in/gerald-seremu/",
    icon: "💼",
  },
  {
    label: "GitHub",
    value: "TG-Seremu",
    href: "https://github.com/TG-Seremu",
    icon: "🐙",
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:geraldseremu5@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0A%0AFrom: ${name}%0AEmail: ${email}`;
    window.location.href = mailtoLink;
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative w-full py-28 bg-[#050a14] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

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
            Get In Touch
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-sky-500/40 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — Text & Socials */}
          <div className="flex flex-col gap-8">
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3
                className="text-2xl md:text-3xl font-black text-white mb-4"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Let's work{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                  together
                </span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I'm currently open to junior developer roles and freelance
                opportunities. Whether you have a project in mind, a question,
                or just want to say hi — my inbox is always open!
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-sky-500/30 hover:bg-sky-500/5 transition-all duration-300 group"
                >
                  <span className="text-2xl">{social.icon}</span>
                  <div>
                    <p className="text-slate-500 text-xs font-mono">
                      {social.label}
                    </p>
                    <p className="text-slate-300 text-sm group-hover:text-sky-400 transition-colors duration-300">
                      {social.value}
                    </p>
                  </div>
                  <span className="ml-auto text-slate-600 group-hover:text-sky-400 transition-colors duration-300">
                    →
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — Contact Form */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-400 text-sm font-mono">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-sky-500/5 transition-all duration-300 text-sm"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-400 text-sm font-mono">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-sky-500/5 transition-all duration-300 text-sm"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-slate-400 text-sm font-mono">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hey Tadiwa, I'd love to work with you on..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-sky-500/5 transition-all duration-300 text-sm resize-none"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:scale-[1.02] transition-all duration-300"
            >
              Send Message 🚀
            </button>

            {/* Success message */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sky-400 text-sm font-mono"
              >
                ✅ Message sent! I'll get back to you soon.
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p
            className="text-white font-black text-lg"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            T<span className="text-sky-400">.</span>Seremu
          </p>
          <p className="text-slate-500 text-sm font-mono">
            © 2024 Tadiwa Seremu. Built with React & ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
}