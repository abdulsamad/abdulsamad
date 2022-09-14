import styled from 'styled-components';

const Card = styled.div`
  flex-basis: 50%;
  padding: 1.5em;
  border-left: 5px solid ${({ theme }) => theme.color.primary};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1em;
    margin: 2em 0;
  }
`;

export default Card;
