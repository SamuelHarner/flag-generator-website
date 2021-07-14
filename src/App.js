import "./App.css";
import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { Stage, Layer } from "react-konva";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Flag } from "./Flag";

function App() {
  // COLORS SETUP
  const [col1, setCol1] = useState("black");
  const [col2, setCol2] = useState("white");
  const [col3, setCol3] = useState("grey");
  const [showCol1Picker, setShowCol1Picker] = useState(false);
  const [showCol2Picker, setShowCol2Picker] = useState(false);
  const [showCol3Picker, setShowCol3Picker] = useState(false);

  // FLAG STYLES SETUP
  const flagStyles = [
    { value: "hor_tricolor", label: "Horizontal tricolor" },
    { value: "ver_tricolor", label: "Vertical tricolor" },
  ];

  const defaultFlagStyle = "hor_tricolor";
  const [flagStyle, setFlagStyle] = useState(defaultFlagStyle);

  const changeFlagStyle = (option) => setFlagStyle(option.value);

  // LOCAL CSS STYLES
  const styles = {
    swatch1: {
      width: 35,
      height: 35,
      background: col1,
      border: `1px solid black`,
      marginLeft: 5,
    },
    swatch2: {
      width: 35,
      height: 35,
      background: col2,
      border: `1px solid black`,
      marginLeft: 5,
    },
    swatch3: {
      width: 35,
      height: 35,
      background: col3,
      border: `1px solid black`,
      marginLeft: 5,
    },
  };

  // APP RETURN
  return (
    <div className="App">
      {/* OUTERMOST DIV */}

      <h1>Flag Generator</h1>

      <div className="FlagOptions">
        {/* Flag style dropdown menu */}
        <Dropdown
          options={flagStyles}
          value={defaultFlagStyle}
          onChange={changeFlagStyle}
          placeholder="Select a flag style"
        />

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
