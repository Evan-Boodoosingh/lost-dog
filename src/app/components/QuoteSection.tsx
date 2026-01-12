import { motion } from "motion/react";

interface QuoteSectionProps {
  quote: string;
  author: string;
  subtext?: string;
}

export function QuoteSection({ quote, author, subtext }: QuoteSectionProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 0.3 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="max-w-4xl mx-auto mb-8 md:mb-16"
    >
      <div className="bg-gradient-to-r from-yellow-400/60 to-orange-400/60 backdrop-blur-lg rounded-3xl p-8 border-4 border-white/60 shadow-2xl text-center">
        <p className="text-3xl text-white drop-shadow-lg mb-2">{quote}</p>
        <p className="text-2xl text-white/90 drop-shadow-lg">- {author}</p>
        {subtext && <p className="text-xl mt-4 text-white/80">{subtext}</p>}
      </div>
    </motion.div>
  );
}
