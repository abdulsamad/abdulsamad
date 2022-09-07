import React from 'react';
import styled from 'styled-components';

interface CircleProps {
  height: string;
  width: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  background: string;
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
  overflow: hidden;
`;

interface ShapeProps {
  type: 'circle';
  height: string;
  width: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  background: string;
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
}: ShapeProps) => {
  switch (type) {
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
        />
      );
  }
};

export default Shapes;
