import styled from 'styled-components';

const Card = styled.div`
  padding: 2rem;
  background: #1b1b1b;
  margin-right: 1rem;
  border-left: 5px solid ${({ theme }) => theme.color.primary};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 2rem 0;
  }
`;

export default Card;
