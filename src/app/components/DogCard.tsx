import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

interface DogCardProps {
  name: string;
  title: string;
  emoji: string;
  imageUrl: string;
  quote: string;
  onClick: () => void;
  delay: number;
  direction: "left" | "right";
  objectPositionY?: string;
}

export function DogCard({
  name,
  title,
  emoji,
  imageUrl,
  quote,
  onClick,
  delay,
  direction,
  objectPositionY = "0%",
}: DogCardProps) {
  return (
    <motion.div
      initial={{ x: direction === "left" ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        delay: delay * 0.2,
      }}
      whileHover={{ scale: 1.05, rotate: direction === "left" ? 2 : -2 }}
      className="bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-yellow-500/40 backdrop-blur-lg rounded-3xl p-6 border-4 border-white/60 shadow-2xl cursor-pointer flex flex-col"
      onClick={onClick}
    >
      <div className="relative rounded-2xl overflow-hidden mb-4 border-4 border-white/60">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-80 object-cover"
          style={{ objectPosition: `center ${objectPositionY}` }}
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-xl">
          {name} {emoji}
        </div>
      </div>
      <h3 className="text-3xl mb-3 text-white drop-shadow-lg">{title}</h3>
      <p className="text-xl text-white/90 mb-4 flex-grow">{quote}</p>
      <Button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 hover:from-purple-700 hover:via-pink-700 hover:to-yellow-600 text-white py-6 text-xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg">
        View Profile <Heart className="ml-2 w-6 h-6" />
      </Button>
    </motion.div>
  );
}
