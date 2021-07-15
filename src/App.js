import "./App.css";
import { FLAG } from "./constants";
import React, { useState, useRef } from "react";
import { ChromePicker } from "react-color";
import { Stage, Layer, Rect } from "react-konva";
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
    { value: "nordic_cross", label: "Nordic cross" },
    { value: "scandinavian_cross", label: "Scandinavian cross" },
    { value: "saltire_dicolor", label: "Saltire dicolor" },
    { value: "saltire_tricolor", label: "Saltire tricolor" },
    { value: "hor_dicolor", label: "Horizontal dicolor" },
    { value: "ver_dicolor", label: "Vertical dicolor" },
    { value: "czech", label: "Czech" },
    { value: "japan", label: "Japan" },
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

  // DOWNLOAD BUTTON EXPORT SETUP
  const layerRef = useRef(null);

  const handleExport = () => {
    const uri = layerRef.current.toDataURL();
    downloadURI(uri, "flag.png");
  };

  // APP RETURN
  return (
    <div className="App">
      {/* OUTERMOST DIV */}

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
            {showCol1Picker ? "Close color 1" : "Color 1: "}
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
            {showCol2Picker ? "Close color 2" : "Color 2: "}
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
            {showCol3Picker ? "Close color 3" : "Color 3: "}
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

        {/* Download flag button */}
        <button className="DlFlagButton" onClick={handleExport}>
          Download flag
        </button>
      </div>

      {/* FLAG */}
      <div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Rect
              x={FLAG.START_X - 1}
              y={FLAG.START_Y - 1}
              width={FLAG.WIDTH + 2}
              height={FLAG.HEIGHT + 2}
              fill="black"
            />
          </Layer>
          <Layer ref={layerRef}>
            <Flag flagStyle={flagStyle} col1={col1} col2={col2} col3={col3} />
          </Layer>
        </Stage>
      </div>
      {/* OUTERMOST DIV */}
    </div>
  );
}

// function from https://stackoverflow.com/a/15832662/512042
function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default App;
