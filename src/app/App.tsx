import { useState, useEffect } from "react";
import {
  DogProfile,
  HeroSection,
  FloatingBackground,
  OwnerInfoCard,
  DogCardsSection,
  QuoteSection,
  ContactSection,
  Footer,
  Navbar,
} from "./components";
import { Toaster } from "./components/ui/sonner";
import grizImage from "./components/images/GRiZ.png";
import korraImage from "./components/images/Korra.png";

type View = "home" | "griz" | "korra";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("home");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleViewChange = (view: View) => {
    if (currentView === "home") {
      setScrollPosition(window.scrollY);
    }
    setCurrentView(view);
    if (view !== "home") {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (currentView === "home" && scrollPosition > 0) {
      window.scrollTo(0, scrollPosition);
    }
  }, [currentView, scrollPosition]);

  if (currentView === "griz") {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-600 to-pink-500 animate-gradient">
          <DogProfile
            name="GRiZ"
            breed="Labradoodle"
            age="< 1 YEAR"
            color="Black"
            weight="Medium-Large"
            personality={[
              "🎸 Named after the DJ!",
              "🌟 Super Friendly",
              "💝 Loves Everyone",
              "🎾 Playful & Energetic",
              "🤗 Likes to play Around",
            ]}
            imageUrl={grizImage}
            funFacts={[
              "Responds to his name with tail wags",
              "Loves treats and belly rubs",
              "Might be hanging out near parks or dog-friendly areas",
              "Very social and approachable",
            ]}
            onBack={() => handleViewChange("home")}
            objectPositionY="42%"
          />
        </div>
        <Toaster />
      </>
    );
  }

  if (currentView === "korra") {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-fuchsia-600 to-indigo-700 animate-gradient">
          <DogProfile
            name="Korra"
            breed="Black Mouth Cur / Hound"
            age="2 Years Old"
            color="Brown and White"
            weight="35 Pounds"
            personality={[
              "🌊 Named after Avatar Korra!",
              "💪 Strong & Independent",
              "🎭 Full of Character",
              "⚡ Energetic Spirit",
              "💙 Loyal Companion",
            ]}
            imageUrl={korraImage}
            funFacts={[
              "Has a energetic spirit",
              "Loves everyone she meets",
              "Loves exploring new places",
              "Recognizes familiar voices and faces",
            ]}
            onBack={() => handleViewChange("home")}
            objectPositionY="25%"
          />
        </div>
        <Toaster />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-600 to-fuchsia-500 animate-gradient overflow-x-hidden">
        <FloatingBackground />
        <Navbar />

        <div className="relative z-10 px-4 pt-16 md:pt-24 pb-4 md:pb-8">
          <div className="min-h-screen flex flex-col justify-center">
            <HeroSection />
            <OwnerInfoCard />
          </div>

          <div
            id="puppers"
            className="min-h-screen flex flex-col justify-center pt-12 pb-0 scroll-mt-24"
          >
            <DogCardsSection
              onViewGriz={() => handleViewChange("griz")}
              onViewKorra={() => handleViewChange("korra")}
            />
            <QuoteSection
              quote="No matter what happens, as long as we're alive, we'll see each other again."
              author="Bellemere"
              subtext="(Every map leads back to home when you're part of a crew. Help us reunite our Nakama! 🏴‍☠️✨)"
            />
          </div>

          <div
            id="contact"
            className="min-h-screen flex flex-col justify-center scroll-mt-24"
          >
            <ContactSection />
          </div>

          <Footer />
        </div>
      </div>
      <Toaster />
    </>
  );
}
