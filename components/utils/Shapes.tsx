import React from 'react';
import styled from 'styled-components';

interface CircleProps {
  height: string;
  width: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  background?: string;
  border?: string;
  responsive?: boolean;
}

const Circle = styled.div<CircleProps>`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: ${({ background }) => background};
  border-radius: 50%;
  border: ${({ border }) => border};
  overflow: hidden;
  display: ${({ responsive }) => (responsive ? 'block' : 'none')};
`;

interface SquareProps {
  height: string;
  width: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  background?: string;
  border?: string;
  radius?: string;
  responsive?: boolean;
}

const Square = styled.div<SquareProps>`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: ${({ background }) => background};
  border-radius: ${({ radius }) => radius};
  border: ${({ border }) => border};
  overflow: hidden;
  display: ${({ responsive }) => (responsive ? 'block' : 'none')};
`;

interface ShapeProps {
  type: 'circle' | 'square' | 'triangle';
  height: string;
  width: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  background?: string;
  border?: string;
  radius?: string;
  responsive?: boolean;
}

const Shapes = ({
  type,
  height,
  width,
  top,
  right,
  bottom,
  left,
  background,
  border,
  radius,
  responsive = true,
}: ShapeProps) => {
  switch (type) {
    case 'circle':
      return (
        <Circle
          height={height}
          width={width}
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          background={background}
          border={border}
          responsive={responsive}
          aria-hidden="true"
        />
      );

    case 'square':
      return (
        <Square
          height={height}
          width={width}
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          background={background}
          border={border}
          radius={radius}
          responsive={responsive}
          aria-hidden="true"
        />
      );

    default:
      return (
        <Circle
          height={height}
          width={width}
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          background={background}
          border={border}
          responsive={responsive}
          aria-hidden="true"
        />
      );
  }
};

export default Shapes;
