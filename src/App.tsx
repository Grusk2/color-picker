import React, { useState } from 'react';
import Header from './components/Header';
import ColorPicker from './components/ColorPicker';
import PreviewSection from './components/PreviewSection';
import ColorDetails from './components/ColorDetails';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [colors, setColors] = useState({
    background: '#ffffff',
    text: '#000000',
    primary: '#2f27ce',
    secondary: '#dddbff',
    accent: '#443dff',
  });

  const updateColor = (key: keyof typeof colors, value: string) => {
    setColors((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        {Object.entries(colors).map(([key, color]) => (
          <ColorPicker
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            initialColor={color}
            onColorChange={(value) => updateColor(key as keyof typeof colors, value)}
          />
        ))}
      </div>
      <PreviewSection colors={colors} />
      <ColorDetails colors={colors} />
      <Footer />
    </div>
  );
};

export default App;
