import "./App.css";
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { Stage, Layer, Rect } from "react-konva";
import { Flag } from "./Flag";

function App() {
  const [col1, setCol1] = useState("#000000");
  const [col2, setCol2] = useState("#ffffff");
  const [col3, setCol3] = useState("#B9B9B9");
  const [showCol1Picker, setShowCol1Picker] = useState(false);
  const [showCol2Picker, setShowCol2Picker] = useState(false);
  const [showCol3Picker, setShowCol3Picker] = useState(false);

  const [flagStyle, setFlagStyle] = useState("hor_tricolor");

  const styles = {
    swatch1: {
      width: 20,
      height: 20,
      background: col1,
      border: `1px solid black`,
      marginLeft: 5,
    },
    swatch2: {
      width: 20,
      height: 20,
      background: col2,
      border: `1px solid black`,
      marginLeft: 5,
    },
    swatch3: {
      width: 20,
      height: 20,
      background: col3,
      border: `1px solid black`,
      marginLeft: 5,
    },

    flag: {
      border: `1px solid black`,
    },
  };

  return (
    <div className="App">
      {/* OUTERMOST DIV */}

      <h1>Flag Generator</h1>

      <div className="FlagOptions">
        {/* Color picker 1 */}
        <div className="ColorSelector">
          <button
            onClick={() =>
              setShowCol1Picker((showCol1Picker) => !showCol1Picker)
            }
          >
            {showCol1Picker ? "Confirm color 1" : "Color 1: "}
          </button>
          {showCol1Picker && (
            <ChromePicker
              color={col1}
              onChange={(col1) => {
                setCol1(col1.hex);
              }}
            />
          )}
          <div style={styles.swatch1} />
        </div>

        {/* Color picker 2 */}
        <div className="ColorSelector">
          <button
            onClick={() =>
              setShowCol2Picker((showCol2Picker) => !showCol2Picker)
            }
          >
            {showCol2Picker ? "Confirm color 2" : "Color 2: "}
          </button>
          {showCol2Picker && (
            <ChromePicker
              color={col2}
              onChange={(col2) => {
                setCol2(col2.hex);
              }}
            />
          )}
          <div style={styles.swatch2} />
        </div>

        {/* Color picker 3 */}
        <div className="ColorSelector">
          <button
            onClick={() =>
              setShowCol3Picker((showCol3Picker) => !showCol3Picker)
            }
          >
            {showCol3Picker ? "Confirm color 3" : "Color 3: "}
          </button>
          {showCol3Picker && (
            <ChromePicker
              color={col3}
              onChange={(col3) => {
                setCol3(col3.hex);
              }}
            />
          )}
          <div style={styles.swatch3} />
        </div>
      </div>

      {/* FLAG */}
      <div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer style={styles.flag}>
            <Flag flagStyle={flagStyle} col1={col1} col2={col2} col3={col3} />
          </Layer>
        </Stage>
      </div>

      {/* TEST */}
      {/* <div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Rect x={500} y={100} width={100} height={100} fill={col1} />
          </Layer>
        </Stage>
      </div> */}
      {/* OUTERMOST DIV */}
    </div>
  );
}

export default App;
