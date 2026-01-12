import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 50;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const targetScroll = elementPosition - navbarHeight;
      const currentScroll = window.scrollY;

      // Only scroll if we're not already at the target position (within 5px tolerance)
      if (Math.abs(currentScroll - targetScroll) > 5) {
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl z-40 bg-white/5 backdrop-blur-lg rounded-full border border-white/15 shadow-2xl">
        <div className="px-6">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={scrollToTop}
              className="text-2xl cursor-pointer hover:scale-110 transition-transform"
            >
              🐾
            </button>

            {!isMenuOpen && (
              <div
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="text-2xl absolute right-6 z-40 md:hidden cursor-pointer text-white hover:bg-white/10 p-2 rounded-full transition-all"
              >
                <Menu />
              </div>
            )}

            <div className="flex md:flex items-center">
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={scrollToTop}
                  className="text-white text-md font-medium hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick("puppers")}
                  className="text-white text-md font-medium hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
                >
                  The Puppers
                </button>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="text-white text-md font-medium hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-gradient-to-br from-purple-500/90 via-pink-500/90 to-yellow-500/90 backdrop-blur-xl rounded-3xl border-2 border-white/30 shadow-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl">🐾</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:bg-white/10 p-2 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={scrollToTop}
                className="text-white text-lg font-medium hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 text-left"
              >
                🏠 Home
              </button>
              <button
                onClick={() => handleNavClick("puppers")}
                className="text-white text-lg font-medium hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 text-left"
              >
                🐕 The Puppers
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-white text-lg font-medium hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300 text-left"
              >
                ✉️ Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
