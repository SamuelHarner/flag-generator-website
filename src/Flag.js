/* Functions for creating flags */
import { FLAG } from "./constants";
import { Rect } from "react-konva";

export function Flag({ flagStyle, col1, col2, col3 }) {
  switch (flagStyle) {
    case "hor_tricolor":
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

    case "ver_tricolor":
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

    case "hor_dicolor":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH / 2}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + FLAG.WIDTH / 2}
            y={FLAG.START_Y}
            width={FLAG.WIDTH / 2}
            height={FLAG.HEIGHT}
            fill={col2}
          />
        </>
      );

    case "ver_dicolor":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 2}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + FLAG.HEIGHT / 2}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 2}
            fill={col2}
          />
        </>
      );

    case "monocolor":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
        </>
      );

    default:
      return null;
  }
}
