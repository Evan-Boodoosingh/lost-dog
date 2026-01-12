import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function ContactForm() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ amount: 0.3 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-yellow-500/20 backdrop-blur-sm rounded-3xl p-4 md:p-6 border-4 border-white/30 shadow-2xl">
        <h2 className="text-2xl md:text-3xl mb-3 md:mb-4 text-center text-white">
          🌟 Get in Touch! 🌟
        </h2>

        <div className="mb-3 md:mb-4 p-3 md:p-4 bg-white/20 backdrop-blur-sm rounded-2xl space-y-1 text-sm md:text-base">
          <div className="flex items-center gap-3 text-white">
            <Phone className="w-5 h-5 text-yellow-300" />
            <a
              href="tel:863-251-3329"
              className="hover:text-yellow-300 transition-colors"
            >
              863-251-3329
            </a>
          </div>
          <div className="flex items-center gap-3 text-white">
            <Mail className="w-5 h-5 text-pink-300" />
            <span>evan9496@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <MapPin className="w-5 h-5 text-purple-300" />
            <span>Polk County, FL</span>
          </div>
        </div>

        <form
          action="https://formsubmit.co/evan9496@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="_next" value={window.location.origin} />
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="contact-input w-full bg-white/5 backdrop-blur-lg border border-white/15 rounded-full px-6 py-4 text-white text-lg text-center placeholder-white shadow-2xl transition-all duration-300 focus:outline-none focus:border-pink-500/30 focus:shadow-[0_0_8px_rgba(236,72,153,0.2)] h-16 placeholder:text-center"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
              className="contact-input w-full bg-white/5 backdrop-blur-lg border border-white/15 rounded-full px-6 py-4 text-white text-lg text-center placeholder-white shadow-2xl transition-all duration-300 focus:outline-none focus:border-pink-500/30 focus:shadow-[0_0_8px_rgba(236,72,153,0.2)] h-16 placeholder:text-center"
            />
          </div>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(123) 456-7890"
              className="contact-input w-full bg-white/5 backdrop-blur-lg border border-white/15 rounded-full px-6 py-4 text-white text-lg text-center placeholder-white shadow-2xl transition-all duration-300 focus:outline-none focus:border-pink-500/30 focus:shadow-[0_0_8px_rgba(236,72,153,0.2)] h-16 placeholder:text-center"
            />
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={2}
              placeholder="Tell me about your sighting or any information!"
              required
              className="contact-input w-full bg-white/5 backdrop-blur-lg border border-white/15 rounded-3xl px-4 py-3 md:px-6 md:py-4 text-white text-base md:text-lg text-center placeholder-white shadow-2xl transition-all duration-300 focus:outline-none focus:border-pink-500/30 focus:shadow-[0_0_8px_rgba(236,72,153,0.2)] h-auto min-h-[4rem] md:h-16 md:min-h-16 resize-y max-h-48 placeholder:text-center overflow-y-auto"
            />
          </div>
          <div>
            <button
              type="submit"
              style={{
                background:
                  "linear-gradient(to right, #9333ea, #db2777, #eab308)",
              }}
              className="w-full text-white py-3 px-6 rounded-full hover:shadow-[0_0_15px_rgba(219,39,119,0.4)] font-medium transition relative overflow-hidden h-16 text-xl"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
