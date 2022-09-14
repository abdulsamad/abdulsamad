import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  z-index: 10;
  box-sizing: border-box;
  text-align: center;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  color: ${({ theme }) => theme.color.text};
  border-radius: 0.8em;
  padding: 1.5em;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  }
`;

export default Card;
