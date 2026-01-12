import { motion } from "motion/react";

export function HeroSection() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 px-4 w-full max-w-6xl mx-auto"
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-12 text-white drop-shadow-2xl leading-tight mx-auto break-words"
        animate={{
          textShadow: [
            "0 0 20px rgba(168, 85, 247, 0.5)",
            "0 0 40px rgba(236, 72, 153, 0.5)",
            "0 0 20px rgba(251, 191, 36, 0.5)",
            "0 0 40px rgba(168, 85, 247, 0.5)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🐾 "Found My Dog?" 🐾
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white drop-shadow-lg mb-4 px-2"
      >
        "Some friendships are so strong, they can even transcend lifetimes."
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 drop-shadow-lg"
      >
        - Avatar Roku
      </motion.p>
    </motion.div>
  );
}
