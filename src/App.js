import './App.css';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

function App() {
  const [col1, setCol1] = useState("ff0000");
  const [showCol1Picker, setShowCol1Picker] = useState(false);

  const col1style = {
    display: "flex",
    width: "20px",
    height: "20px",
    color: {col1},
    backgroundColor: {col1},
    padding: "10px",
  };



  return (
    <div className="App">
      <h1 style={{col1}}>
        Flag Generator
      </h1>

      <div className="ColorSelector">
        <button
          onClick={() => setShowCol1Picker(showCol1Picker => !showCol1Picker)}
        >
          {showCol1Picker ? 'Confirm color 1' : 'Color 1: '}
        </button>
        {showCol1Picker && (
          <ChromePicker
            color={col1}
            onChange={ (col1) => {setCol1(col1.hex)} }
          />
          )}
      </div>
      
      <div style={col1style}></div>
    </div>
  );
}

export default App;
