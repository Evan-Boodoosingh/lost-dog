import { motion } from "motion/react";
import { Search } from "lucide-react";
import { DogCard } from "./DogCard";
import grizImage from "./images/GRiZ.JPG";
import korraImage from "./images/Korra.jpeg";

interface DogCardsSectionProps {
  onViewGriz: () => void;
  onViewKorra: () => void;
}

export function DogCardsSection({
  onViewGriz,
  onViewKorra,
}: DogCardsSectionProps) {
  return (
    <div className="max-w-6xl mx-auto mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.8 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="text-5xl text-center mb-12 text-white drop-shadow-xl flex items-center justify-center gap-4"
      >
        <Search className="w-12 h-12" />
        Meet the Puppers
        <Search className="w-12 h-12" />
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        <DogCard
          name="GRiZ"
          title="GRiZ the Labradoodle"
          emoji="🎸"
          imageUrl={grizImage}
          quote="We're all in this together. If we can just show a little more love and spread a little more love, we can make the world a better place. — GRiZ"
          onClick={onViewGriz}
          delay={0.6}
          direction="left"
          objectPositionY="27%"
        />

        <DogCard
          name="Korra"
          title="Korra the Adventurer"
          emoji="🌊"
          imageUrl={korraImage}
          quote="The world is changing, and it can be scary. But we can't just hide away. We have to be the light that people look for. We have to keep fighting for the things we love, no matter what. — Korra"
          onClick={onViewKorra}
          delay={0.8}
          direction="right"
          objectPositionY="28%"
        />
      </div>
    </div>
  );
}
