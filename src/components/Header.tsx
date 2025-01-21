import React from "react";

interface HeaderProps {
  colors: {
    background: string;
    text: string;
  };
}

const Header: React.FC<HeaderProps> = ({ colors }) => {
  const { background, text } = colors;

  return (
    <header
      className="w-full py-4 px-8 text-center"
      style={{
        backgroundColor: background,
        color: text,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <h1 className="text-2xl font-bold">Color Scheme Picker</h1>
      <p className="text-sm">Pick and preview your color palette in real-time!</p>
    </header>
  );
};

export default Header;
