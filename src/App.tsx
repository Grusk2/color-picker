import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Toolbar from "./components/Toolbar";
import Header from "./components/Header";

const App: React.FC = () => {
  const [colors, setColors] = useState({
    background: "#ffffff",
    text: "#000000",
    primary: "#3b82f6",
    secondary: "#6b7280",
    accent: "#f59e0b",
  });

  const updateColor = (key: string, value: string) => {
    setColors((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <Header />
      <HeroSection colors={colors} />
      <Toolbar colors={colors} updateColor={updateColor} />
    </div>
  );
};

export default App;
