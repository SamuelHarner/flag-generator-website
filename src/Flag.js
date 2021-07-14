import { Rect } from "react-konva";

/* Functions for creating flags */

// Default aspect ratio
const WIDTH = 1920;
const HEIGHT = 1080;

export function Flag({ flagStyle, col1, col2, col3 }) {
  if (flagStyle === "hor_tricolor") {
    return <Rect x={20} y={20} width={50} height={50} fill={col1} />;
  } else if (flagStyle === "ver_tricolor") {
    return <Rect x={20} y={20} width={50} height={50} fill={col3} />;
  }

  return null;
}
