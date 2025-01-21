import React from 'react';

interface PreviewSectionProps {
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
  };
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ colors }) => {
  const { background, text, primary, secondary, accent } = colors;

  return (
    <div
      style={{
        backgroundColor: background,
        color: text,
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h2>Preview Section</h2>
      <p>This is how your color scheme looks in action!</p>
      <button
        style={{
          backgroundColor: primary,
          color: text,
          padding: '10px 20px',
          border: `2px solid ${accent}`,
          borderRadius: '4px',
          margin: '10px',
        }}
      >
        Primary Button
      </button>
      <button
        style={{
          backgroundColor: secondary,
          color: text,
          padding: '10px 20px',
          border: `2px solid ${accent}`,
          borderRadius: '4px',
        }}
      >
        Secondary Button
      </button>
    </div>
  );
};

export default PreviewSection;
