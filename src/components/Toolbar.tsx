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
    <div className="fixed bottom-0 left-0 right-0 z-50 shadow-lg p-24">
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
              className="px-4 py-2 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
              style={{
                backgroundColor: color,
                color: color === "#ffffff" ? "#000000" : "#ffffff", // Dynamic text color for white backgrounds
                textShadow: color === "#ffffff" ? "1px 1px 2px rgba(0,0,0,0.6)" : "none", // Add shadow for white background
              }}
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
