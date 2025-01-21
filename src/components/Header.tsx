import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h1>Color Scheme Picker</h1>
      <p>Pick and preview your color palette in real-time!</p>
    </header>
  );
};

export default Header;
