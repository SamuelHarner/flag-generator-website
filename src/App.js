import './App.css';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

function App() {
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#ffffff");
  const [color3, setColor3] = useState("#B9B9B9");
  const [showCol1Picker, setShowCol1Picker] = useState(false);
  const [showCol2Picker, setShowCol2Picker] = useState(false);
  const [showCol3Picker, setShowCol3Picker] = useState(false);

  const styles = {
    swatch1: {
      width: 20,
      height: 20,
      background: color1,
      border: `1px solid black`,
      marginLeft: 5,
    },
    swatch2: {
      width: 20,
      height: 20,
      background: color2,
      border: `1px solid black`,
      marginLeft: 5,
    },
    swatch3: {
      width: 20,
      height: 20,
      background: color3,
      border: `1px solid black`,
      marginLeft: 5,
    },
  }


  return (
    <div className="App">
      <h1>Flag Generator</h1>

      <div className="ColorPickers">
        {/* Color picker 1 */}
        <div className="ColorSelector">
          <button
            onClick={() => setShowCol1Picker(showCol1Picker => !showCol1Picker)}
          >
            {showCol1Picker ? 'Confirm color 1' : 'Color 1: '}
          </button>
          {showCol1Picker && (
            <ChromePicker
              color={color1}
              onChange={ (color1) => {setColor1(color1.hex)} }
            />
            )}
          <div style={ styles.swatch1 } />
        </div>
        
        {/* Color picker 2 */}
        <div className="ColorSelector">
          <button
            onClick={() => setShowCol2Picker(showCol2Picker => !showCol2Picker)}
          >
            {showCol2Picker ? 'Confirm color 2' : 'Color 2: '}
          </button>
          {showCol2Picker && (
            <ChromePicker
              color={color2}
              onChange={ (color2) => {setColor2(color2.hex)} }
            />
            )}
          <div style={ styles.swatch2 } />
        </div>

        {/* Color picker 3 */}
        <div className="ColorSelector">
          <button
            onClick={() => setShowCol3Picker(showCol3Picker => !showCol3Picker)}
          >
            {showCol3Picker ? 'Confirm color 3' : 'Color 3: '}
          </button>
          {showCol3Picker && (
            <ChromePicker
              color={color3}
              onChange={ (color3) => {setColor3(color3.hex)} }
            />
            )}
          <div style={ styles.swatch3 } />
        </div>
      </div>
      
    </div>
  );
}

export default App;
