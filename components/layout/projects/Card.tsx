import styled from "styled-components";

const Card = styled.div`
  margin: 0 0 0 -60px;
  height: 150px;
  width: 400px;
  background: linear-gradient(45deg, rgb(0, 159, 255), rgb(236, 47, 75));
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  color: ${({ theme }) => theme.color.white};
`;

export default Card;
