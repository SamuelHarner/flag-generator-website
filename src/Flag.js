/* Functions for creating flags */
import { FLAG } from "./constants";
import { Circle, Rect, Line } from "react-konva";

export function Flag({ flagStyle, col1, col2, col3 }) {
  switch (flagStyle) {
    case "ver_tricolor":
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

    case "hor_tricolor":
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

    case "nordic_cross":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          {/* Horizontal stripe */}
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (2 * FLAG.HEIGHT) / 5}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 5}
            fill={col2}
          />
          {/* Vertical stripe */}
          <Rect
            x={FLAG.START_X + (5 * FLAG.WIDTH) / 16}
            y={FLAG.START_Y}
            width={(2 * FLAG.HEIGHT) / 10}
            height={FLAG.HEIGHT}
            fill={col2}
          />
        </>
      );

    case "scandinavian_cross":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          {/* Horizontal stripe */}
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (2 * FLAG.HEIGHT) / 5}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 5}
            fill={col2}
          />
          {/* Vertical stripe */}
          <Rect
            x={FLAG.START_X + (5 * FLAG.WIDTH) / 16}
            y={FLAG.START_Y}
            width={(2 * FLAG.HEIGHT) / 10}
            height={FLAG.HEIGHT}
            fill={col2}
          />
          {/* Horizontal thin stripe */}
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (9 * FLAG.HEIGHT) / 20}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 10}
            fill={col3}
          />
          {/* Vertical thin stripe */}
          <Rect
            x={FLAG.START_X + (5 * FLAG.WIDTH) / 16 + FLAG.HEIGHT / 20}
            y={FLAG.START_Y}
            width={FLAG.HEIGHT / 10}
            height={FLAG.HEIGHT}
            fill={col3}
          />
        </>
      );

    case "saltire_bicolor":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          {/* Stripe 1 */}
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y + FLAG.HEIGHT / 10,
              FLAG.START_X,
              FLAG.START_Y,
              FLAG.START_X + FLAG.HEIGHT / 10,
              FLAG.START_Y,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y + FLAG.HEIGHT - FLAG.HEIGHT / 10,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y + FLAG.HEIGHT,
              FLAG.START_X + FLAG.WIDTH - FLAG.HEIGHT / 10,
              FLAG.START_Y + FLAG.HEIGHT,
            ]}
            closed
            fill={col2}
          />
          {/* Stripe 2 */}
          <Line
            points={[
              FLAG.START_X + FLAG.HEIGHT / 10,
              FLAG.START_Y + FLAG.HEIGHT,
              FLAG.START_X,
              FLAG.START_Y + FLAG.HEIGHT,
              FLAG.START_X,
              FLAG.START_Y + FLAG.HEIGHT - FLAG.HEIGHT / 10,
              FLAG.START_X + FLAG.WIDTH - FLAG.HEIGHT / 10,
              FLAG.START_Y,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y + FLAG.HEIGHT / 10,
            ]}
            closed
            fill={col2}
          />
        </>
      );

    case "saltire_tricolor":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          {/* Top triangle */}
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y,
              FLAG.START_X + FLAG.WIDTH / 2,
              FLAG.START_Y + FLAG.HEIGHT / 2,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y,
            ]}
            closed
            fill={col3}
          />
          {/* Bottom triangle */}
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y + FLAG.HEIGHT,
              FLAG.START_X + FLAG.WIDTH / 2,
              FLAG.START_Y + FLAG.HEIGHT / 2,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y + FLAG.HEIGHT,
            ]}
            closed
            fill={col3}
          />
          {/* Stripe 1 */}
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y + FLAG.HEIGHT / 10,
              FLAG.START_X,
              FLAG.START_Y,
              FLAG.START_X + FLAG.HEIGHT / 10,
              FLAG.START_Y,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y + FLAG.HEIGHT - FLAG.HEIGHT / 10,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y + FLAG.HEIGHT,
              FLAG.START_X + FLAG.WIDTH - FLAG.HEIGHT / 10,
              FLAG.START_Y + FLAG.HEIGHT,
            ]}
            closed
            fill={col2}
          />
          {/* Stripe 2 */}
          <Line
            points={[
              FLAG.START_X + FLAG.HEIGHT / 10,
              FLAG.START_Y + FLAG.HEIGHT,
              FLAG.START_X,
              FLAG.START_Y + FLAG.HEIGHT,
              FLAG.START_X,
              FLAG.START_Y + FLAG.HEIGHT - FLAG.HEIGHT / 10,
              FLAG.START_X + FLAG.WIDTH - FLAG.HEIGHT / 10,
              FLAG.START_Y,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y + FLAG.HEIGHT / 10,
            ]}
            closed
            fill={col2}
          />
        </>
      );

    case "ver_bicolor":
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

    case "hor_bicolor":
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

    case "czech":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 2}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + FLAG.HEIGHT / 2}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 2}
            fill={col3}
          />
          {/* Horizontal triangle */}
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y,
              FLAG.START_X + (1.5 * FLAG.WIDTH) / 3,
              FLAG.START_Y + FLAG.HEIGHT / 2,
              FLAG.START_X,
              FLAG.START_Y + FLAG.HEIGHT,
            ]}
            closed
            fill={col1}
          />
        </>
      );

    case "japan":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          <Circle
            x={FLAG.START_X + FLAG.WIDTH / 2}
            y={FLAG.START_Y + FLAG.HEIGHT / 2}
            radius={FLAG.WIDTH / 6}
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
