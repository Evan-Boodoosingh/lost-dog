import { motion } from "motion/react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export function SocialLinks() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ amount: 0.3 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="flex justify-center gap-6 sm:gap-10 py-2 text-white"
    >
      <a
        href="https://www.facebook.com/evan.boodoosingh"
        className="border border-white/30 p-3 text-2xl rounded-full hover:-translate-y-2 transition-all text-white w-12 h-12 flex items-center justify-center hover:border-white/60"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/evan9496"
        className="border border-white/30 p-3 text-2xl rounded-full hover:-translate-y-2 transition-all text-white w-12 h-12 flex items-center justify-center hover:border-white/60"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </motion.div>
  );
}
