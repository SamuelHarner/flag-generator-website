/* Functions for creating flags */
import { FLAG } from "./constants";
import { Rect } from "react-konva";

export function Flag({ flagStyle, col1, col2, col3 }) {
  if (flagStyle === "hor_tricolor") {
    return (
      <>
        <Rect
          x={FLAG.START_X}
          y={FLAG.START_Y}
          width={FLAG.WIDTH / 3}
          height={FLAG.HEIGHT}
          fill={col1}
        />
        <Rect
          x={FLAG.START_X + FLAG.WIDTH / 3}
          y={FLAG.START_Y}
          width={FLAG.WIDTH / 3}
          height={FLAG.HEIGHT}
          fill={col2}
        />
        <Rect
          x={FLAG.START_X + (2 * FLAG.WIDTH) / 3}
          y={FLAG.START_Y}
          width={FLAG.WIDTH / 3}
          height={FLAG.HEIGHT}
          fill={col3}
        />
      </>
    );
  } else if (flagStyle === "ver_tricolor") {
    return (
      <>
        <Rect
          x={FLAG.START_X}
          y={FLAG.START_Y}
          width={FLAG.WIDTH}
          height={FLAG.HEIGHT / 3}
          fill={col1}
        />
        <Rect
          x={FLAG.START_X}
          y={FLAG.START_Y + FLAG.HEIGHT / 3}
          width={FLAG.WIDTH}
          height={FLAG.HEIGHT / 3}
          fill={col2}
        />
        <Rect
          x={FLAG.START_X}
          y={FLAG.START_Y + (2 * FLAG.HEIGHT) / 3}
          width={FLAG.WIDTH}
          height={FLAG.HEIGHT / 3}
          fill={col3}
        />
      </>
    );
  }

  return null;
}
