import { motion } from "motion/react";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="max-w-4xl mx-auto space-y-4 md:space-y-6"
    >
      <div className="text-center space-y-2 md:space-y-4 pt-10 md:pt-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-2xl">
          Got My Dog? Let's Connect! 🎯
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-white drop-shadow-lg">
          "People's lives don't end when they die. It ends when they lose
          faith." - Itachi
          <br />
          <span className="text-base md:text-xl">
            (Keep the faith and help me find my pups!)
          </span>
        </p>
      </div>
      <ContactForm />
    </motion.div>
  );
}
