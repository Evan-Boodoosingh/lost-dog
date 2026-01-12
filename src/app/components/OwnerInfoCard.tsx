import { motion } from "motion/react";
import { Sparkles, Phone } from "lucide-react";

export function OwnerInfoCard() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="max-w-4xl mx-auto mb-8 md:mb-16"
    >
      <div className="bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-yellow-500/40 backdrop-blur-lg rounded-3xl p-6 md:p-8 border-4 border-white/60 shadow-2xl">
        <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
          <Sparkles className="w-10 h-10 text-yellow-300" />
          <h2 className="text-4xl text-center text-white drop-shadow-lg">
            Please Help Me Find Them!
          </h2>
          <Sparkles className="w-10 h-10 text-yellow-300" />
        </div>
        <div className="text-center space-y-2 md:space-y-3 text-lg md:text-xl">
          <p className="text-2xl text-white">
            <span className="font-bold text-yellow-300">Owner:</span> Evan
            Boodoosingh
          </p>
          <p className="flex items-center justify-center gap-2 text-white">
            <Phone className="w-6 h-6 text-yellow-300" />
            <a
              href="tel:863-251-3329"
              className="font-bold text-white hover:text-yellow-300 transition-colors"
            >
              863-251-3329
            </a>
          </p>
          <p className="text-white">
            <span className="font-bold text-yellow-300">Location:</span> Polk
            County, Florida
          </p>
        </div>
        <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white/20 backdrop-blur-sm rounded-2xl text-center">
          <p className="text-xl italic text-white drop-shadow-lg">
            ""I'm going to bring them back... I'll keep that promise even if it
            kills me!" — Naruto Uzumaki
            <br />
            {/* <span className="text-lg">
              (And believe me we'll find these puppers!)
            </span> */}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
