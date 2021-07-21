/* Functions for creating flags */
import { FLAG } from "./constants";
import { Circle, Rect, Line, Star } from "react-konva";

export function Flag({ flagStyle, col1, col2, col3 }) {
  switch (flagStyle) {
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

    case "tribar":
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
            width={(2 * FLAG.WIDTH) / 3}
            height={FLAG.HEIGHT / 2}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X + FLAG.WIDTH / 3}
            y={FLAG.START_Y + FLAG.HEIGHT / 2}
            width={(2 * FLAG.WIDTH) / 3}
            height={FLAG.HEIGHT / 2}
            fill={col3}
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

    case "down_diag_bicolor":
      return (
        <>
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y + FLAG.HEIGHT,
              FLAG.START_X,
              FLAG.START_Y + FLAG.HEIGHT,
            ]}
            closed
            fill={col1}
          />
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y + FLAG.HEIGHT,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y,
            ]}
            closed
            fill={col2}
          />
        </>
      );

    case "up_diag_bicolor":
      return (
        <>
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y + FLAG.HEIGHT,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y,
              FLAG.START_X,
              FLAG.START_Y,
            ]}
            closed
            fill={col1}
          />
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y + FLAG.HEIGHT,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y,
              FLAG.START_X + FLAG.WIDTH,
              FLAG.START_Y + FLAG.HEIGHT,
            ]}
            closed
            fill={col2}
          />
        </>
      );

    case "down_diag_stripe":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          {/* Stripe */}
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
        </>
      );

    case "up_diag_stripe":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          {/* Stripe */}
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

    case "ver_3_stripe":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + FLAG.WIDTH / 7}
            y={FLAG.START_Y}
            width={FLAG.WIDTH / 7}
            height={FLAG.HEIGHT}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X + (3 * FLAG.WIDTH) / 7}
            y={FLAG.START_Y}
            width={FLAG.WIDTH / 7}
            height={FLAG.HEIGHT}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X + (5 * FLAG.WIDTH) / 7}
            y={FLAG.START_Y}
            width={FLAG.WIDTH / 7}
            height={FLAG.HEIGHT}
            fill={col2}
          />
        </>
      );

    case "ver_2_stripe":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + (2 * FLAG.WIDTH) / 7}
            y={FLAG.START_Y}
            width={FLAG.WIDTH / 7}
            height={FLAG.HEIGHT}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X + (4 * FLAG.WIDTH) / 7}
            y={FLAG.START_Y}
            width={FLAG.WIDTH / 7}
            height={FLAG.HEIGHT}
            fill={col2}
          />
        </>
      );

    case "ver_1_stripe":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + (3 * FLAG.WIDTH) / 7}
            y={FLAG.START_Y}
            width={FLAG.WIDTH / 7}
            height={FLAG.HEIGHT}
            fill={col2}
          />
        </>
      );

    case "hor_3_stripe":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + FLAG.HEIGHT / 7}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 7}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (3 * FLAG.HEIGHT) / 7}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 7}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (5 * FLAG.HEIGHT) / 7}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 7}
            fill={col2}
          />
        </>
      );

    case "hor_2_stripe":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (2 * FLAG.HEIGHT) / 7}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 7}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (4 * FLAG.HEIGHT) / 7}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 7}
            fill={col2}
          />
        </>
      );

    case "hor_1_stripe":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (3 * FLAG.HEIGHT) / 7}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 7}
            fill={col2}
          />
        </>
      );

    case "thai":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + FLAG.HEIGHT / 6}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 6}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (2 * FLAG.HEIGHT) / 6}
            width={FLAG.WIDTH}
            height={(2 * FLAG.HEIGHT) / 6}
            fill={col3}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (4 * FLAG.HEIGHT) / 6}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT / 6}
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

    case "texas":
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
            width={(2 * FLAG.WIDTH) / 3}
            height={FLAG.HEIGHT / 2}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X + FLAG.WIDTH / 3}
            y={FLAG.START_Y + FLAG.HEIGHT / 2}
            width={(2 * FLAG.WIDTH) / 3}
            height={FLAG.HEIGHT / 2}
            fill={col3}
          />
          <Star
            x={FLAG.START_X + FLAG.WIDTH / 6}
            y={FLAG.START_Y + FLAG.HEIGHT / 2}
            numPoints={5}
            innerRadius={FLAG.WIDTH / 20}
            outerRadius={(2.618 * FLAG.WIDTH) / 20}
            fill={col2}
          />
        </>
      );

    case "chile":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH / 3}
            height={FLAG.HEIGHT / 2}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + FLAG.WIDTH / 3}
            y={FLAG.START_Y}
            width={(2 * FLAG.WIDTH) / 3}
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
          <Star
            x={FLAG.START_X + FLAG.WIDTH / 6}
            y={FLAG.START_Y + FLAG.HEIGHT / 4}
            numPoints={5}
            innerRadius={FLAG.WIDTH / 30}
            outerRadius={(2.618 * FLAG.WIDTH) / 30}
            fill={col2}
          />
        </>
      );

    case "swiss":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          {/* Vertical */}
          <Rect
            x={FLAG.START_X + FLAG.WIDTH / 2 - FLAG.HEIGHT / 10}
            y={FLAG.START_Y + FLAG.HEIGHT / 5}
            width={FLAG.HEIGHT / 5}
            height={(3 * FLAG.HEIGHT) / 5}
            fill={col2}
          />
          {/* Horizontal */}
          <Rect
            x={FLAG.START_X + FLAG.WIDTH / 2 - (1.5 * FLAG.HEIGHT) / 5}
            y={FLAG.START_Y + (2 * FLAG.HEIGHT) / 5}
            width={(3 * FLAG.HEIGHT) / 5}
            height={FLAG.HEIGHT / 5}
            fill={col2}
          />
        </>
      );

    case "centered_circle":
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

    case "centered_hollow_circle":
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
          <Circle
            x={FLAG.START_X + FLAG.WIDTH / 2}
            y={FLAG.START_Y + FLAG.HEIGHT / 2}
            radius={FLAG.WIDTH / 8}
            fill={col3}
          />
        </>
      );

    case "circle_hor_tricolor":
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
            fill={col3}
          />
          <Circle
            x={FLAG.START_X + FLAG.WIDTH / 2}
            y={FLAG.START_Y + FLAG.HEIGHT / 2}
            radius={FLAG.WIDTH / 6}
            fill={col2}
          />
        </>
      );

    case "circle_ver_tricolor":
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
            fill={col3}
          />
          <Circle
            x={FLAG.START_X + FLAG.WIDTH / 2}
            y={FLAG.START_Y + FLAG.HEIGHT / 2}
            radius={FLAG.WIDTH / 6}
            fill={col2}
          />
        </>
      );

    case "centered_star":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          <Star
            x={FLAG.START_X + FLAG.WIDTH / 2}
            y={FLAG.START_Y + FLAG.HEIGHT / 2}
            numPoints={5}
            innerRadius={FLAG.WIDTH / 20}
            outerRadius={(2.618 * FLAG.WIDTH) / 20}
            fill={col2}
          />
        </>
      );

    case "centered_hollow_star":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          <Star
            x={FLAG.START_X + FLAG.WIDTH / 2}
            y={FLAG.START_Y + FLAG.HEIGHT / 2}
            numPoints={5}
            innerRadius={FLAG.WIDTH / 15}
            outerRadius={(2.618 * FLAG.WIDTH) / 15}
            fill={col2}
          />
          <Star
            x={FLAG.START_X + FLAG.WIDTH / 2}
            y={FLAG.START_Y + FLAG.HEIGHT / 2}
            numPoints={5}
            innerRadius={FLAG.WIDTH / 20}
            outerRadius={(2.618 * FLAG.WIDTH) / 20}
            fill={col3}
          />
        </>
      );

    case "cornered_star":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={FLAG.WIDTH}
            height={FLAG.HEIGHT}
            fill={col1}
          />
          <Star
            x={FLAG.START_X + FLAG.WIDTH / 6}
            y={FLAG.START_Y + FLAG.HEIGHT / 4}
            numPoints={5}
            innerRadius={FLAG.WIDTH / 30}
            outerRadius={(2.618 * FLAG.WIDTH) / 30}
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
