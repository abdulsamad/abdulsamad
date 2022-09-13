import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  height?: number;
  width?: number;
  borderWidth?: number;
}

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

const LoaderStyled = styled.div<Props>`
  border: ${({ borderWidth }) => borderWidth}px solid
    ${({ theme }) => theme.color.primary};
  border-top: ${({ borderWidth }) => borderWidth}px solid transparent;
  border-radius: 50%;
  margin: auto;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  animation: ${spin} 0.6s linear infinite;
`;

const Loader = ({ height = 60, width = 60, borderWidth = 2 }: Props) => (
  <LoaderContainer>
    <LoaderStyled height={height} width={width} borderWidth={borderWidth} />
  </LoaderContainer>
);

export default Loader;
