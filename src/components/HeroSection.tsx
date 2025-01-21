import React from "react";

interface HeroSectionProps {
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ colors }) => {
  const { background, text, primary, secondary, accent } = colors;

  return (
    <section
      className="flex flex-col items-center justify-center flex-grow p-8 transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: background,
        color: text,
      }}
    >
      <h1
        className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r"
        style={{
          backgroundImage: `linear-gradient(to right, ${primary}, ${accent})`,
        }}
      >
        Visualize Your Colors
      </h1>
      <p className="mt-6 text-lg font-medium text-center max-w-2xl" style={{ color: secondary }}>
        Choose colors and see them come alive in a real-world design. Experiment with different
        text, backgrounds, and buttons effortlessly.
      </p>
      <button
        className="mt-8 px-6 py-3 font-semibold text-white rounded-full transition-transform transform hover:scale-105"
        style={{
          backgroundColor: accent,
          color: text,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primary)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = accent)}
      >
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
