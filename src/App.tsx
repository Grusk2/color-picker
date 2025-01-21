import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";
import HeroSection from "./components/HeroSection";

const App: React.FC = () => {
  const [colors, setColors] = useState({
    background: "#000000",
    text: "#FFFFFF",
    primary: "#3b82f6",
    secondary: "#6b7280",
    accent: "#f59e0b",
  });

  const updateColor = (key: string, value: string) => {
    setColors((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header colors={colors} />
      <HeroSection colors={colors} />
      <Footer colors={colors} />
      <Toolbar colors={colors} updateColor={updateColor} />
    </div>
  );
};

export default App;
