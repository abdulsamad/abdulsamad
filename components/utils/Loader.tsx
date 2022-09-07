import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  height?: number;
  width?: number;
  borderWidth?: number;
  color?: string;
}

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

const LoaderStyled = styled.div<Props>`
  border: ${({ borderWidth }) => borderWidth}px solid ${({ color }) => color};
  border-top: ${({ borderWidth }) => borderWidth}px solid transparent;
  border-radius: 50%;
  margin: auto;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  animation: ${spin} 0.6s linear infinite;
`;

const Loader = ({
  height = 60,
  width = 60,
  borderWidth = 2,
  color = '#f5f5f5',
}: Props) => (
  <LoaderStyled
    height={height}
    width={width}
    borderWidth={borderWidth}
    color={color}
  />
);

export default Loader;
