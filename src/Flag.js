/* Functions for creating flags */
import { FLAG } from "./constants";
import { Circle, Rect, Line, Star, Arc } from "react-konva";

export function Flag({ flagStyle, col1, col2, col3, flagWidth, flagHeight }) {
  switch (flagStyle) {
    case "hor_tricolor":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={flagWidth}
            height={flagHeight / 3}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + flagHeight / 3}
            width={flagWidth}
            height={flagHeight / 3}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (2 * flagHeight) / 3}
            width={flagWidth}
            height={flagHeight / 3}
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
            width={flagWidth / 3}
            height={flagHeight}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + flagWidth / 3}
            y={FLAG.START_Y}
            width={flagWidth / 3}
            height={flagHeight}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X + (2 * flagWidth) / 3}
            y={FLAG.START_Y}
            width={flagWidth / 3}
            height={flagHeight}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          {/* Horizontal stripe */}
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (2 * flagHeight) / 5}
            width={flagWidth}
            height={flagHeight / 5}
            fill={col2}
          />
          {/* Vertical stripe */}
          <Rect
            x={FLAG.START_X + (5 * flagWidth) / 16}
            y={FLAG.START_Y}
            width={(2 * flagHeight) / 10}
            height={flagHeight}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          {/* Horizontal stripe */}
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (2 * flagHeight) / 5}
            width={flagWidth}
            height={flagHeight / 5}
            fill={col2}
          />
          {/* Vertical stripe */}
          <Rect
            x={FLAG.START_X + (5 * flagWidth) / 16}
            y={FLAG.START_Y}
            width={(2 * flagHeight) / 10}
            height={flagHeight}
            fill={col2}
          />
          {/* Horizontal thin stripe */}
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (9 * flagHeight) / 20}
            width={flagWidth}
            height={flagHeight / 10}
            fill={col3}
          />
          {/* Vertical thin stripe */}
          <Rect
            x={FLAG.START_X + (5 * flagWidth) / 16 + flagHeight / 20}
            y={FLAG.START_Y}
            width={flagHeight / 10}
            height={flagHeight}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          {/* Stripe 1 */}
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y + flagHeight / 10,
              FLAG.START_X,
              FLAG.START_Y,
              FLAG.START_X + flagHeight / 10,
              FLAG.START_Y,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight - flagHeight / 10,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight,
              FLAG.START_X + flagWidth - flagHeight / 10,
              FLAG.START_Y + flagHeight,
            ]}
            closed
            fill={col2}
          />
          {/* Stripe 2 */}
          <Line
            points={[
              FLAG.START_X + flagHeight / 10,
              FLAG.START_Y + flagHeight,
              FLAG.START_X,
              FLAG.START_Y + flagHeight,
              FLAG.START_X,
              FLAG.START_Y + flagHeight - flagHeight / 10,
              FLAG.START_X + flagWidth - flagHeight / 10,
              FLAG.START_Y,
              FLAG.START_X + flagWidth,
              FLAG.START_Y,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight / 10,
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          {/* Top triangle */}
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y,
              FLAG.START_X + flagWidth / 2,
              FLAG.START_Y + flagHeight / 2,
              FLAG.START_X + flagWidth,
              FLAG.START_Y,
            ]}
            closed
            fill={col3}
          />
          {/* Bottom triangle */}
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y + flagHeight,
              FLAG.START_X + flagWidth / 2,
              FLAG.START_Y + flagHeight / 2,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight,
            ]}
            closed
            fill={col3}
          />
          {/* Stripe 1 */}
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y + flagHeight / 10,
              FLAG.START_X,
              FLAG.START_Y,
              FLAG.START_X + flagHeight / 10,
              FLAG.START_Y,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight - flagHeight / 10,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight,
              FLAG.START_X + flagWidth - flagHeight / 10,
              FLAG.START_Y + flagHeight,
            ]}
            closed
            fill={col2}
          />
          {/* Stripe 2 */}
          <Line
            points={[
              FLAG.START_X + flagHeight / 10,
              FLAG.START_Y + flagHeight,
              FLAG.START_X,
              FLAG.START_Y + flagHeight,
              FLAG.START_X,
              FLAG.START_Y + flagHeight - flagHeight / 10,
              FLAG.START_X + flagWidth - flagHeight / 10,
              FLAG.START_Y,
              FLAG.START_X + flagWidth,
              FLAG.START_Y,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight / 10,
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
            width={flagWidth / 3}
            height={flagHeight}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + flagWidth / 3}
            y={FLAG.START_Y}
            width={(2 * flagWidth) / 3}
            height={flagHeight / 2}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X + flagWidth / 3}
            y={FLAG.START_Y + flagHeight / 2}
            width={(2 * flagWidth) / 3}
            height={flagHeight / 2}
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
            width={flagWidth}
            height={flagHeight / 2}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + flagHeight / 2}
            width={flagWidth}
            height={flagHeight / 2}
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
            width={flagWidth / 2}
            height={flagHeight}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y}
            width={flagWidth / 2}
            height={flagHeight}
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
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight,
              FLAG.START_X,
              FLAG.START_Y + flagHeight,
            ]}
            closed
            fill={col1}
          />
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight,
              FLAG.START_X + flagWidth,
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
              FLAG.START_Y + flagHeight,
              FLAG.START_X + flagWidth,
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
              FLAG.START_Y + flagHeight,
              FLAG.START_X + flagWidth,
              FLAG.START_Y,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight,
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          {/* Stripe */}
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y + flagHeight / 10,
              FLAG.START_X,
              FLAG.START_Y,
              FLAG.START_X + flagHeight / 10,
              FLAG.START_Y,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight - flagHeight / 10,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight,
              FLAG.START_X + flagWidth - flagHeight / 10,
              FLAG.START_Y + flagHeight,
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          {/* Stripe */}
          <Line
            points={[
              FLAG.START_X + flagHeight / 10,
              FLAG.START_Y + flagHeight,
              FLAG.START_X,
              FLAG.START_Y + flagHeight,
              FLAG.START_X,
              FLAG.START_Y + flagHeight - flagHeight / 10,
              FLAG.START_X + flagWidth - flagHeight / 10,
              FLAG.START_Y,
              FLAG.START_X + flagWidth,
              FLAG.START_Y,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight / 10,
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + flagWidth / 7}
            y={FLAG.START_Y}
            width={flagWidth / 7}
            height={flagHeight}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X + (3 * flagWidth) / 7}
            y={FLAG.START_Y}
            width={flagWidth / 7}
            height={flagHeight}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X + (5 * flagWidth) / 7}
            y={FLAG.START_Y}
            width={flagWidth / 7}
            height={flagHeight}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + (2 * flagWidth) / 7}
            y={FLAG.START_Y}
            width={flagWidth / 7}
            height={flagHeight}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X + (4 * flagWidth) / 7}
            y={FLAG.START_Y}
            width={flagWidth / 7}
            height={flagHeight}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + (3 * flagWidth) / 7}
            y={FLAG.START_Y}
            width={flagWidth / 7}
            height={flagHeight}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + flagHeight / 7}
            width={flagWidth}
            height={flagHeight / 7}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (3 * flagHeight) / 7}
            width={flagWidth}
            height={flagHeight / 7}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (5 * flagHeight) / 7}
            width={flagWidth}
            height={flagHeight / 7}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (2 * flagHeight) / 7}
            width={flagWidth}
            height={flagHeight / 7}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (4 * flagHeight) / 7}
            width={flagWidth}
            height={flagHeight / 7}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (3 * flagHeight) / 7}
            width={flagWidth}
            height={flagHeight / 7}
            fill={col2}
          />
        </>
      );

    case "greece":
      const cantonWidth = flagWidth / 2.5;
      const cantonHeight = (5 * flagHeight) / 9;

      return (
        <>
          {/* Stripes */}
          {[...Array(9)].map((_, i) => (
            <Rect
              key={i}
              x={FLAG.START_X}
              y={FLAG.START_Y + (i * flagHeight) / 9}
              width={flagWidth}
              height={flagHeight / 9}
              fill={i % 2 === 0 ? col1 : col2}
            />
          ))}

          {/* Canton with background color */}
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={cantonWidth}
            height={cantonHeight}
            fill={col1}
          />

          {/* Cross in the canton */}
          {/* Vertical part of the cross */}
          <Rect
            x={FLAG.START_X + cantonWidth / 2 - flagHeight / 9 / 2}
            y={FLAG.START_Y}
            width={flagHeight / 9}
            height={cantonHeight}
            fill={col2}
          />
          {/* Horizontal part of the cross */}
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (2 * flagHeight) / 9}
            width={cantonWidth}
            height={flagHeight / 9}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + flagHeight / 6}
            width={flagWidth}
            height={flagHeight / 6}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (2 * flagHeight) / 6}
            width={flagWidth}
            height={(2 * flagHeight) / 6}
            fill={col3}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + (4 * flagHeight) / 6}
            width={flagWidth}
            height={flagHeight / 6}
            fill={col2}
          />
        </>
      );

    case "botswana":
      const centralStripeHeight = (2 * flagHeight) / 9;
      const framingStripeHeight = flagHeight / 18;

      return (
        <>
          {/* Top part of the flag */}
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={flagWidth}
            height={
              (flagHeight - centralStripeHeight - 2 * framingStripeHeight) / 2
            }
            fill={col1}
          />
          {/* First framing stripe */}
          <Rect
            x={FLAG.START_X}
            y={
              FLAG.START_Y +
              (flagHeight - centralStripeHeight - 2 * framingStripeHeight) / 2
            }
            width={flagWidth}
            height={framingStripeHeight}
            fill={col3}
          />
          {/* Central stripe */}
          <Rect
            x={FLAG.START_X}
            y={
              FLAG.START_Y +
              (flagHeight - centralStripeHeight - 2 * framingStripeHeight) / 2 +
              framingStripeHeight
            }
            width={flagWidth}
            height={centralStripeHeight}
            fill={col2}
          />
          {/* Second framing stripe */}
          <Rect
            x={FLAG.START_X}
            y={
              FLAG.START_Y +
              (flagHeight - centralStripeHeight - 2 * framingStripeHeight) / 2 +
              framingStripeHeight +
              centralStripeHeight
            }
            width={flagWidth}
            height={framingStripeHeight}
            fill={col3}
          />
          {/* Bottom part of the flag */}
          <Rect
            x={FLAG.START_X}
            y={
              FLAG.START_Y +
              (flagHeight - centralStripeHeight - 2 * framingStripeHeight) / 2 +
              2 * framingStripeHeight +
              centralStripeHeight
            }
            width={flagWidth}
            height={
              (flagHeight - centralStripeHeight - 2 * framingStripeHeight) / 2
            }
            fill={col1}
          />
        </>
      );

    case "czech":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={flagWidth}
            height={flagHeight / 2}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + flagHeight / 2}
            width={flagWidth}
            height={flagHeight / 2}
            fill={col3}
          />
          {/* Horizontal triangle */}
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y,
              FLAG.START_X + (1.5 * flagWidth) / 3,
              FLAG.START_Y + flagHeight / 2,
              FLAG.START_X,
              FLAG.START_Y + flagHeight,
            ]}
            closed
            fill={col1}
          />
        </>
      );

    case "trinidad_and_tobago":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          {/* Wide stripe */}
          <Line
            points={[
              FLAG.START_X,
              FLAG.START_Y,
              FLAG.START_X + flagWidth / 3,
              FLAG.START_Y,
              FLAG.START_X + flagWidth / 3,
              FLAG.START_Y,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight,
              FLAG.START_X + flagWidth,
              FLAG.START_Y + flagHeight,
              FLAG.START_X + (2 * flagWidth) / 3,
              FLAG.START_Y + flagHeight,
            ]}
            closed
            fill={col2}
          />
          {/* Thin stripe */}
          <Line
            points={[
              FLAG.START_X + flagWidth / 16,
              FLAG.START_Y,
              FLAG.START_X + flagWidth / 3 - flagWidth / 16,
              FLAG.START_Y,
              FLAG.START_X + flagWidth / 3 - flagWidth / 16,
              FLAG.START_Y,
              FLAG.START_X + flagWidth - flagWidth / 16,
              FLAG.START_Y + flagHeight,
              FLAG.START_X + (2 * flagWidth) / 3 + flagWidth / 16,
              FLAG.START_Y + flagHeight,
              FLAG.START_X + (2 * flagWidth) / 3 + flagWidth / 16,
              FLAG.START_Y + flagHeight,
            ]}
            closed
            fill={col3}
          />
        </>
      );

    case "texas":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={flagWidth / 3}
            height={flagHeight}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + flagWidth / 3}
            y={FLAG.START_Y}
            width={(2 * flagWidth) / 3}
            height={flagHeight / 2}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X + flagWidth / 3}
            y={FLAG.START_Y + flagHeight / 2}
            width={(2 * flagWidth) / 3}
            height={flagHeight / 2}
            fill={col3}
          />
          <Star
            x={FLAG.START_X + flagWidth / 6}
            y={FLAG.START_Y + flagHeight / 2}
            numPoints={5}
            innerRadius={flagWidth / 20}
            outerRadius={(2.618 * flagWidth) / 20}
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
            width={flagWidth / 3}
            height={flagHeight / 2}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + flagWidth / 3}
            y={FLAG.START_Y}
            width={(2 * flagWidth) / 3}
            height={flagHeight / 2}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + flagHeight / 2}
            width={flagWidth}
            height={flagHeight / 2}
            fill={col3}
          />
          <Star
            x={FLAG.START_X + flagWidth / 6}
            y={FLAG.START_Y + flagHeight / 4}
            numPoints={5}
            innerRadius={flagWidth / 30}
            outerRadius={(2.618 * flagWidth) / 30}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          {/* Vertical */}
          <Rect
            x={FLAG.START_X + flagWidth / 2 - flagHeight / 10}
            y={FLAG.START_Y + flagHeight / 5}
            width={flagHeight / 5}
            height={(3 * flagHeight) / 5}
            fill={col2}
          />
          {/* Horizontal */}
          <Rect
            x={FLAG.START_X + flagWidth / 2 - (1.5 * flagHeight) / 5}
            y={FLAG.START_Y + (2 * flagHeight) / 5}
            width={(3 * flagHeight) / 5}
            height={flagHeight / 5}
            fill={col2}
          />
        </>
      );

    case "greenland":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={flagWidth}
            height={flagHeight / 2}
            fill={col1}
          />
          <Circle
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y + flagHeight / 2}
            radius={flagWidth / 6}
            fill={col2}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + flagHeight / 2}
            width={flagWidth}
            height={flagHeight / 2}
            fill={col2}
          />
          <Arc
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y + flagHeight / 2}
            innerRadius={0}
            outerRadius={flagWidth / 6}
            angle={180}
            fill={col1}
            rotation={0}
          />
        </>
      );

    case "centered_circle":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          <Circle
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y + flagHeight / 2}
            radius={flagWidth / 6}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          <Circle
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y + flagHeight / 2}
            radius={flagWidth / 6}
            fill={col2}
          />
          <Circle
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y + flagHeight / 2}
            radius={flagWidth / 8}
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
            width={flagWidth}
            height={flagHeight / 2}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + flagHeight / 2}
            width={flagWidth}
            height={flagHeight / 2}
            fill={col3}
          />
          <Circle
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y + flagHeight / 2}
            radius={flagWidth / 6}
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
            width={flagWidth / 2}
            height={flagHeight}
            fill={col1}
          />
          <Rect
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y}
            width={flagWidth / 2}
            height={flagHeight}
            fill={col3}
          />
          <Circle
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y + flagHeight / 2}
            radius={flagWidth / 6}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          <Star
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y + flagHeight / 2}
            numPoints={5}
            innerRadius={flagWidth / 20}
            outerRadius={(2.618 * flagWidth) / 20}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          <Star
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y + flagHeight / 2}
            numPoints={5}
            innerRadius={flagWidth / 15}
            outerRadius={(2.618 * flagWidth) / 15}
            fill={col2}
          />
          <Star
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y + flagHeight / 2}
            numPoints={5}
            innerRadius={flagWidth / 20}
            outerRadius={(2.618 * flagWidth) / 20}
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
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
          <Star
            x={FLAG.START_X + flagWidth / 6}
            y={FLAG.START_Y + flagHeight / 4}
            numPoints={5}
            innerRadius={flagWidth / 30}
            outerRadius={(2.618 * flagWidth) / 30}
            fill={col2}
          />
        </>
      );

    case "panama":
      return (
        <>
          {/* Top-left rectangle with a star */}
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={flagWidth / 2}
            height={flagHeight / 2}
            fill={col1}
          />
          <Star
            x={FLAG.START_X + flagWidth / 4}
            y={FLAG.START_Y + flagHeight / 4}
            numPoints={5}
            innerRadius={flagWidth / 30}
            outerRadius={(2.618 * flagWidth) / 30}
            fill={col2}
          />

          {/* Top-right rectangle */}
          <Rect
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y}
            width={flagWidth / 2}
            height={flagHeight / 2}
            fill={col3}
          />

          {/* Bottom-left rectangle */}
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y + flagHeight / 2}
            width={flagWidth / 2}
            height={flagHeight / 2}
            fill={col2}
          />

          {/* Bottom-right rectangle with a star */}
          <Rect
            x={FLAG.START_X + flagWidth / 2}
            y={FLAG.START_Y + flagHeight / 2}
            width={flagWidth / 2}
            height={flagHeight / 2}
            fill={col1}
          />
          <Star
            x={FLAG.START_X + 3 * (flagWidth / 4)}
            y={FLAG.START_Y + (3 * flagHeight) / 4}
            numPoints={5}
            innerRadius={flagWidth / 30}
            outerRadius={(2.618 * flagWidth) / 30}
            fill={col3}
          />
        </>
      );

    case "monocolor":
      return (
        <>
          <Rect
            x={FLAG.START_X}
            y={FLAG.START_Y}
            width={flagWidth}
            height={flagHeight}
            fill={col1}
          />
        </>
      );

    default:
      return null;
  }
}
