import React, { useState } from 'react';
import './MyComponent.css'; // Import CSS file for styling

const MyComponent = () => {
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleNumberChange = (e) => {
    setSelectedNumber(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <label htmlFor="numberSelect">Select a number:</label>
      <div className="custom-select">
        <select id="numberSelect" value={selectedNumber} onChange={handleNumberChange}>
          <option value="">-- Select --</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      {selectedNumber && (
        <p>You selected: {selectedNumber}</p>
      )}
    </div>
  );
};

export default MyComponent;
