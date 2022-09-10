import styled from 'styled-components';

const Card = styled.div`
  margin: 0 0 0 -60px;
  height: 120px;
  flex-basis: 50%;
  max-width: 100%;
  z-index: 10;
  transform: skew(-20deg);
  background: linear-gradient(45deg, rgb(0, 159, 255), rgb(236, 47, 75));
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0;
  }
`;

export default Card;
