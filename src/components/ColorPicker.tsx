import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

interface ColorPickerProps {
  label: string;
  initialColor: string;
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, initialColor, onColorChange }) => {
  const [color, setColor] = useState(initialColor);

  const handleChange = (newColor: string) => {
    setColor(newColor);
    onColorChange(newColor);
  };

  return (
    <div style={{ textAlign: 'center', margin: '10px' }}>
      <label>{label}</label>
      <HexColorPicker color={color} onChange={handleChange} />
      <p>{color}</p>
    </div>
  );
};

export default ColorPicker;
