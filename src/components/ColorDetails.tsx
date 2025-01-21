import React from 'react';

interface ColorDetailsProps {
  colors: {
    [key: string]: string;
  };
}

const ColorDetails: React.FC<ColorDetailsProps> = ({ colors }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h3>Color Details</h3>
      <ul>
        {Object.entries(colors).map(([key, value]) => (
          <li key={key}>
            {key}: {value}{' '}
            <button
              onClick={() => navigator.clipboard.writeText(value)}
              style={{ marginLeft: '10px' }}
            >
              Copy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorDetails;
