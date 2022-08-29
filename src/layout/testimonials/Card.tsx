import styled from "styled-components";

const Card = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.color.white};
  margin-right: 2rem;
  border-left: 5px solid ${({ theme }) => theme.color.primary};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem;
    margin: 2rem 0;
  }
`;

export default Card;
