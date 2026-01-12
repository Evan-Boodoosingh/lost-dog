import { motion } from "motion/react";
import { ContactForm } from "./ContactForm";
import { ArrowLeft, Heart, Sparkles, Star } from "lucide-react";
import { Button } from "./ui/button";

interface DogProfileProps {
  name: string;
  breed?: string;
  age?: string;
  color?: string;
  weight?: string;
  personality?: string[];
  imageUrl: string;
  funFacts?: string[];
  onBack: () => void;
  objectPositionY?: string;
}

export function DogProfile({
  name,
  breed,
  age,
  color,
  weight,
  personality,
  imageUrl,
  funFacts,
  onBack,
  objectPositionY = "50%",
}: DogProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <Button
          onClick={onBack}
          className="mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 hover:from-purple-700 hover:via-pink-700 hover:to-yellow-600 rounded-full px-6 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Button>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-yellow-500/30 backdrop-blur-lg rounded-3xl p-8 border-4 border-white/40 shadow-2xl mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image Section */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-3xl overflow-hidden border-4 border-white/60 shadow-2xl"
              >
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-[745px] object-cover"
                  style={{ objectPosition: `center ${objectPositionY}` }}
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-2xl shadow-lg flex items-center">
                  {name} <Heart className="w-6 h-6 ml-2" />
                </div>
              </motion.div>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-300">
                <h2 className="text-3xl mb-4 flex items-center gap-2">
                  <Sparkles className="w-8 h-8 text-yellow-500" />
                  Quick Facts
                </h2>
                <div className="space-y-3 text-lg">
                  {breed && (
                    <div>
                      <span className="font-bold text-purple-600">Breed:</span>{" "}
                      {breed}
                    </div>
                  )}
                  {age && (
                    <div>
                      <span className="font-bold text-pink-600">Age:</span>{" "}
                      {age}
                    </div>
                  )}
                  {color && (
                    <div>
                      <span className="font-bold text-yellow-600">Color:</span>{" "}
                      {color}
                    </div>
                  )}
                  {weight && (
                    <div>
                      <span className="font-bold text-purple-600">Weight:</span>{" "}
                      {weight}
                    </div>
                  )}
                </div>
              </div>

              {personality && personality.length > 0 && (
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-300">
                  <h3 className="text-2xl mb-3 flex items-center gap-2">
                    <Star className="w-7 h-7 text-pink-500" />
                    Personality
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {personality.map((trait, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {funFacts && funFacts.length > 0 && (
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-300">
                  <h3 className="text-2xl mb-3">✨ Fun Facts ✨</h3>
                  <ul className="space-y-2">
                    {funFacts.map((fact, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-pink-500 text-xl">•</span>
                        <span className="text-lg">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          id="contact"
        >
          <div className="text-center mb-8">
            <h2 className="text-5xl mb-4 text-white">Spotted {name}? 🎯</h2>
            <p className="text-2xl text-white">
              "While it is always best to believe in oneself, a little help from
              others can be a great blessing." — Uncle Iroh
            </p>
          </div>
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
}
