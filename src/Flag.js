import { Rect } from "react-konva";

/* Functions for creating flags */

export function Flag({ flagStyle, col1, col2, col3 }) {
  // Default aspect ratio
  const WIDTH = 1920 / 2;
  const HEIGHT = 1080 / 2;
  const START_X = 250;
  const START_Y = 50;
  if (flagStyle === "hor_tricolor") {
    return (
      <>
        <Rect
          x={START_X - 1}
          y={START_Y - 1}
          width={WIDTH + 2}
          height={HEIGHT + 2}
          fill="black"
        />
        <Rect
          x={START_X}
          y={START_Y}
          width={WIDTH / 3}
          height={HEIGHT}
          fill={col1}
        />
        <Rect
          x={START_X + WIDTH / 3}
          y={START_Y}
          width={WIDTH / 3}
          height={HEIGHT}
          fill={col2}
        />
        <Rect
          x={START_X + (2 * WIDTH) / 3}
          y={START_Y}
          width={WIDTH / 3}
          height={HEIGHT}
          fill={col3}
        />
      </>
    );
  } else if (flagStyle === "ver_tricolor") {
    return (
      <>
        <Rect
          x={START_X - 1}
          y={START_Y - 1}
          width={WIDTH + 2}
          height={HEIGHT + 2}
          fill="black"
        />
        <Rect
          x={START_X}
          y={START_Y}
          width={WIDTH}
          height={HEIGHT / 3}
          fill={col1}
        />
        <Rect
          x={START_X}
          y={START_Y + HEIGHT / 3}
          width={WIDTH}
          height={HEIGHT / 3}
          fill={col2}
        />
        <Rect
          x={START_X}
          y={START_Y + (2 * HEIGHT) / 3}
          width={WIDTH}
          height={HEIGHT / 3}
          fill={col3}
        />
      </>
    );
  }

  return null;
}
