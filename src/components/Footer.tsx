import React from "react";

interface FooterProps {
  colors: {
    background: string;
    text: string;
  };
}

const Footer: React.FC<FooterProps> = ({ colors }) => {
  const { background, text } = colors;

  return (
    <footer
      className="w-full py-4 px-8 text-center"
      style={{
        backgroundColor: background,
        color: text,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <p className="text-sm">&copy; 2025 Color Picker Project</p>
    </footer>
  );
};

export default Footer;
