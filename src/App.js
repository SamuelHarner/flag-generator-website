import "./App.css";
import { FLAG } from "./constants";
import React, { useState, useRef } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { Stage, Layer } from "react-konva";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Flag } from "./Flag";

function App() {
  // COLORS SETUP
  const [col1, setCol1] = useState("#000000");
  const [col2, setCol2] = useState("#ffffff");
  const [col3, setCol3] = useState("#808080");

  // FLAG STYLES SETUP
  const flagStyles = [
    { value: "ver_tricolor", label: "Vertical tricolor" },
    { value: "hor_tricolor", label: "Horizontal tricolor" },
    { value: "nordic_cross", label: "Nordic cross" },
    { value: "scandinavian_cross", label: "Scandinavian cross" },
    { value: "saltire_bicolor", label: "Saltire bicolor" },
    { value: "saltire_tricolor", label: "Saltire tricolor" },
    { value: "tribar", label: "Tribar" },
    { value: "ver_bicolor", label: "Vertical bicolor" },
    { value: "hor_bicolor", label: "Horizontal bicolor" },
    { value: "down_diag_bicolor", label: "Down diagonal bicolor" },
    { value: "up_diag_bicolor", label: "Up diagonal bicolor" },
    { value: "down_diag_stripe", label: "Down diagonal stripe" },
    { value: "up_diag_stripe", label: "Up diagonal stripe" },
    { value: "ver_3_stripe", label: "Vertical 3-stripe" },
    { value: "ver_2_stripe", label: "Vertical 2-stripe" },
    { value: "ver_1_stripe", label: "Vertical stripe" },
    { value: "hor_3_stripe", label: "Horizontal 3 -tripe" },
    { value: "hor_2_stripe", label: "Horizontal 2-stripe" },
    { value: "hor_1_stripe", label: "Horizontal stripe" },
    { value: "greece", label: "Greece" },
    { value: "thai", label: "Thai" },
    { value: "botswana", label: "Botswana" },
    { value: "czech", label: "Czech" },
    { value: "trinidad_and_tobago", label: "Trinidad and Tobago" },
    { value: "texas", label: "Texas" },
    { value: "chile", label: "Chile" },
    { value: "swiss", label: "Swiss" },
    { value: "greenland", label: "Greenland" },
    { value: "centered_circle", label: "Centered circle" },
    { value: "centered_hollow_circle", label: "Centered hollow circle" },
    { value: "circle_ver_tricolor", label: "Circle vertical tricolor" },
    { value: "circle_hor_tricolor", label: "Circle horizontal tricolor" },
    { value: "centered_star", label: "Centered star" },
    { value: "centered_hollow_star", label: "Centered hollow star" },
    { value: "cornered_star", label: "Cornered star" },
    { value: "panama", label: "Panama" },
    { value: "monocolor", label: "Monocolor" },
  ];

  const defaultFlagStyle = "ver_tricolor";
  const [flagStyle, setFlagStyle] = useState(defaultFlagStyle);

  const changeFlagStyle = (option) => setFlagStyle(option.value);

  // LOCAL CSS STYLES
  // const styles = {};

  // DOWNLOAD BUTTON EXPORT SETUP
  const layerRef = useRef(null);

  const handleExport = () => {
    const uri = layerRef.current.toDataURL();
    downloadURI(uri, "flag.png");
  };

  // RANDOM BUTTONS SETUP
  function randomHexColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const randomColors = () => {
    // Set three random colors
    setCol1(randomHexColor());
    setCol2(randomHexColor());
    setCol3(randomHexColor());
  };

  const randomStyle = () => {
    // Select a random flag style from the available options
    const randomIndex = Math.floor(Math.random() * flagStyles.length);
    const randomStyle = flagStyles[randomIndex];
    setFlagStyle(randomStyle.value);
  };

  // APP RETURN
  return (
    <div className="App">
      {/* OUTERMOST DIV */}

      <div className="FlagOptions">
        {/* Flag style dropdown menu */}
        <div className="Dropdown">
          <Dropdown
            options={flagStyles}
            value={flagStyle}
            onChange={changeFlagStyle}
            placeholder="Select a flag style"
          />
        </div>

        {/* Color picker 1 */}
        <div className="ColorSelector">
          <section className="small">
            <HexColorPicker color={col1} onChange={setCol1} />
            <HexColorInput color={col1} onChange={setCol1} />
          </section>
        </div>

        {/* Color picker 2 */}
        <div className="ColorSelector">
          <section className="small">
            <HexColorPicker color={col2} onChange={setCol2} />
            <HexColorInput color={col2} onChange={setCol2} />
          </section>
        </div>

        {/* Color picker 3 */}
        <div className="ColorSelector">
          <section className="small">
            <HexColorPicker color={col3} onChange={setCol3} />
            <HexColorInput color={col3} onChange={setCol3} />
          </section>
        </div>

        {/* Random colors button */}
        <button className="RandomColorsButton" onClick={randomColors}>
          Random colors
        </button>

        {/* Random style button */}
        <button className="RandomStyleButton" onClick={randomStyle}>
          Random style
        </button>

        {/* Download flag button */}
        <button className="DlFlagButton" onClick={handleExport}>
          Download flag
        </button>
      </div>

      {/* FLAG */}
      <div classname="Centered">
        <div className="Flag">
          <Stage width={FLAG.WIDTH} height={FLAG.HEIGHT}>
            <Layer ref={layerRef}>
              <Flag
                flagStyle={flagStyle}
                col1={col1}
                col2={col2}
                col3={col3}
                flagWidth={FLAG.WIDTH}
                flagHeight={FLAG.HEIGHT}
              />
            </Layer>
          </Stage>
        </div>
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
