import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="text-center"
    >
      <p className="text-2xl text-white drop-shadow-lg">
        🌸 Made with ❤️ for GRiZ & Korra 🌸
      </p>
      <p className="text-xl text-white/80 mt-2">
        "Plus Ultra!" - All Might (Let's go beyond in finding them!)
      </p>
      <p className="text-xs text-white/60 mt-3">
        © 2026 Evan Boodoosingh. All rights reserved.
      </p>
    </motion.div>
  );
}
