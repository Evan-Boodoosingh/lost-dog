import { motion } from "motion/react";

export function FloatingBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 text-6xl opacity-30"
      >
        🐕
      </motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute top-40 right-20 text-5xl opacity-30"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 left-1/4 text-7xl opacity-30"
      >
        💫
      </motion.div>
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-40 right-1/3 text-6xl opacity-30"
      >
        🌟
      </motion.div>
    </div>
  );
}
