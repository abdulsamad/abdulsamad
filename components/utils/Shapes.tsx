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
  hideOnMobile?: boolean;
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
  pointer-events: none;
  z-index: -10;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ hideOnMobile }) => (hideOnMobile ? 'none' : 'block')};
  }
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
  hideOnMobile?: boolean;
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
  pointer-events: none;
  z-index: -10;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ hideOnMobile }) => (hideOnMobile ? 'none' : 'block')};
  }
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
  hideOnMobile?: boolean;
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
  hideOnMobile = false,
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
          hideOnMobile={hideOnMobile}
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
          hideOnMobile={hideOnMobile}
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
          hideOnMobile={hideOnMobile}
          aria-hidden="true"
        />
      );
  }
};

export default Shapes;
