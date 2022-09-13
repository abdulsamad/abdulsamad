import styled from 'styled-components';

interface IContainer {
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

const Container = styled.div<IContainer>`
  box-sizing: border-box;
  padding: 0 5vw 0 5vw;
  width: 100%;
  max-width: 1920px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify ?? 'space-between'};
`;

export default Container;
