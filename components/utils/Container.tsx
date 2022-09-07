import styled from "styled-components";

const Container = styled.div<{ justify?: string }>`
  box-sizing: border-box;
  padding: 0 5vw 0 5vw;
  width: 100%;
  max-width: 1920px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify ?? "space-between"};
`;

export default Container;
