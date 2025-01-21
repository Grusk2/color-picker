import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

interface ToolbarProps {
  colors: {
    [key: string]: string;
  };
  updateColor: (key: string, value: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ colors, updateColor }) => {
  const [activePicker, setActivePicker] = useState<string | null>(null);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg p-4">
      <div className="flex items-center justify-center gap-4">
        {Object.entries(colors).map(([key, color]) => (
          <div key={key} className="relative">
            {/* Color Picker */}
            {activePicker === key && (
              <div className="absolute bottom-full mb-2 w-cover p-2 bg-white rounded-lg shadow-lg z-50">
                <HexColorPicker
                  color={colors[key]}
                  onChange={(newColor) => updateColor(key, newColor)}
                />
              </div>
            )}

            {/* Button */}
            <button
              className="px-4 py-2 font-semibold text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
              style={{ backgroundColor: color }}
              onClick={() => setActivePicker(activePicker === key ? null : key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
