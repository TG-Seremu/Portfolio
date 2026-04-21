import { motion } from "framer-motion";

export default function TazLogo({ size = 60 }) {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        whileHover={{ rotate: [0, -5, 5, -3, 3, 0], scale: 1.05 }}
        transition={{ duration: 0.6 }}
      >
        <svg
          width={size}
          height={size * 2}
          viewBox="0 0 80 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ===== SNEAKERS ===== */}
          {/* Left sneaker */}
          <ellipse cx="30" cy="150" rx="12" ry="5" fill="white" />
          <rect x="20" y="144" width="14" height="8" rx="3" fill="white" />
          <line x1="20" y1="147" x2="34" y2="147" stroke="#e2e8f0" strokeWidth="1" />
          {/* Sole */}
          <ellipse cx="30" cy="152" rx="12" ry="3" fill="#cbd5e1" />

          {/* Right sneaker */}
          <ellipse cx="52" cy="150" rx="12" ry="5" fill="white" />
          <rect x="46" y="144" width="14" height="8" rx="3" fill="white" />
          <line x1="46" y1="147" x2="60" y2="147" stroke="#e2e8f0" strokeWidth="1" />
          {/* Sole */}
          <ellipse cx="52" cy="152" rx="12" ry="3" fill="#cbd5e1" />

          {/* ===== LEGS — slim tracksuit ===== */}
          {/* Left leg */}
          <rect x="24" y="108" width="12" height="38" rx="6" fill="#0f172a" />
          {/* Right leg */}
          <rect x="44" y="108" width="12" height="38" rx="6" fill="#0f172a" />

          {/* Tracksuit stripe left leg */}
          <line x1="27" y1="110" x2="27" y2="144" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
          {/* Tracksuit stripe right leg */}
          <line x1="53" y1="110" x2="53" y2="144" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />

          {/* ===== BODY — slim torso ===== */}
          <rect x="26" y="68" width="28" height="44" rx="8" fill="#0f172a" />

          {/* Tracksuit zip line */}
          <line x1="40" y1="70" x2="40" y2="108" stroke="#1e293b" strokeWidth="1.5" />

          {/* Tracksuit collar */}
          <path d="M 34 68 L 40 76 L 46 68" fill="#1e293b" stroke="#1e293b" strokeWidth="1" />

          {/* Tracksuit chest stripes */}
          <line x1="28" y1="72" x2="28" y2="108" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="52" y1="72" x2="52" y2="108" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />

          {/* ===== ARMS — slim ===== */}
          {/* Left arm */}
          <rect x="14" y="70" width="12" height="34" rx="6" fill="#0f172a" />
          {/* Left arm stripe */}
          <line x1="17" y1="72" x2="17" y2="102" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" />

          {/* Right arm */}
          <rect x="54" y="70" width="12" height="34" rx="6" fill="#0f172a" />
          {/* Right arm stripe */}
          <line x1="63" y1="72" x2="63" y2="102" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" />

          {/* Hands */}
          <ellipse cx="20" cy="106" rx="6" ry="5" fill="#92400e" />
          <ellipse cx="60" cy="106" rx="6" ry="5" fill="#92400e" />

          {/* ===== NECK ===== */}
          <rect x="35" y="54" width="10" height="16" rx="4" fill="#92400e" />

          {/* ===== HEAD ===== */}
          <ellipse cx="40" cy="38" rx="20" ry="22" fill="#92400e" />

          {/* Ears */}
          <ellipse cx="21" cy="36" rx="5" ry="7" fill="#78350f" />
          <ellipse cx="59" cy="36" rx="5" ry="7" fill="#78350f" />
          <ellipse cx="21" cy="36" rx="3" ry="4" fill="#f87171" />
          <ellipse cx="59" cy="36" rx="3" ry="4" fill="#f87171" />

          {/* Face snout */}
          <ellipse cx="40" cy="44" rx="12" ry="9" fill="#b45309" />

          {/* ===== DREADS — black, free hanging ===== */}
          {/* Back dreads first */}
          <motion.rect x="37" y="4" width="6" height="28" rx="3" fill="#1a0a00"
            animate={{ rotate: [0, 2, -2, 0] }}
            style={{ transformOrigin: "40px 16px" }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />

          {/* Left side dreads */}
          <motion.rect x="18" y="18" width="5" height="30" rx="2.5" fill="#1a0a00"
            animate={{ rotate: [-25, -20, -30, -25] }}
            style={{ transformOrigin: "20px 20px" }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} />
          <motion.rect x="13" y="22" width="5" height="26" rx="2.5" fill="#0f0600"
            animate={{ rotate: [-35, -30, -40, -35] }}
            style={{ transformOrigin: "15px 24px" }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} />
          <motion.rect x="8" y="26" width="4" height="22" rx="2" fill="#1a0a00"
            animate={{ rotate: [-45, -38, -50, -45] }}
            style={{ transformOrigin: "10px 28px" }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />

          {/* Right side dreads */}
          <motion.rect x="57" y="18" width="5" height="30" rx="2.5" fill="#1a0a00"
            animate={{ rotate: [25, 20, 30, 25] }}
            style={{ transformOrigin: "60px 20px" }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />
          <motion.rect x="62" y="22" width="5" height="26" rx="2.5" fill="#0f0600"
            animate={{ rotate: [35, 30, 40, 35] }}
            style={{ transformOrigin: "65px 24px" }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
          <motion.rect x="68" y="26" width="4" height="22" rx="2" fill="#1a0a00"
            animate={{ rotate: [45, 38, 50, 45] }}
            style={{ transformOrigin: "70px 28px" }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} />

          {/* Top front dreads */}
          <motion.rect x="28" y="10" width="5" height="22" rx="2.5" fill="#1a0a00"
            animate={{ rotate: [-12, -8, -16, -12] }}
            style={{ transformOrigin: "30px 18px" }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />
          <motion.rect x="47" y="10" width="5" height="22" rx="2.5" fill="#1a0a00"
            animate={{ rotate: [12, 8, 16, 12] }}
            style={{ transformOrigin: "50px 18px" }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
          <motion.rect x="36" y="6" width="5" height="20" rx="2.5" fill="#0f0600"
            animate={{ rotate: [-5, -2, -8, -5] }}
            style={{ transformOrigin: "38px 14px" }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} />

          {/* ===== FACE DETAILS ===== */}
          {/* Eyes */}
          <ellipse cx="33" cy="34" rx="7" ry="6" fill="white" />
          <ellipse cx="47" cy="34" rx="7" ry="6" fill="white" />

          {/* Pupils */}
          <motion.g
            animate={{ scaleY: [1, 0.8, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="33" cy="35" r="4" fill="#1e293b" />
            <circle cx="47" cy="35" r="4" fill="#1e293b" />
            <circle cx="33" cy="35" r="2.5" fill="#dc2626" />
            <circle cx="47" cy="35" r="2.5" fill="#dc2626" />
            <circle cx="34.5" cy="33.5" r="1.2" fill="white" />
            <circle cx="48.5" cy="33.5" r="1.2" fill="white" />
          </motion.g>

          {/* Serious eyebrows */}
          <path d="M 26 27 L 40 31" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
          <path d="M 40 31 L 54 27" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />

          {/* Nose */}
          <ellipse cx="40" cy="42" rx="4" ry="2.5" fill="#1e293b" />

          {/* Serious mouth */}
          <path d="M 32 48 Q 40 52 48 48" stroke="#1e293b" strokeWidth="1.8" fill="none" strokeLinecap="round" />

          {/* Scar */}
          <line x1="50" y1="30" x2="54" y2="38" stroke="#7f1d1d" strokeWidth="1.5" strokeLinecap="round" />

          {/* ===== WHIRLWIND ===== */}
          <motion.path d="M 22 154 Q 40 148 58 154" stroke="#38bdf8" strokeWidth="2"
            fill="none" strokeLinecap="round"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity }} />
          <motion.path d="M 26 158 Q 40 153 54 158" stroke="#38bdf8" strokeWidth="1.5"
            fill="none" strokeLinecap="round"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.3 }} />
        </svg>
      </motion.div>

      {/* T. Seremu text */}
      <span
        className="text-white font-black text-xl tracking-tight"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        T<span className="text-sky-400">.</span>Seremu
      </span>
    </div>
  );
}