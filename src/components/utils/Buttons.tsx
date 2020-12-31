import styled from 'styled-components';

const Buttons = styled.a`
  text-decoration: none;
  background: ${({ theme }) => theme.color.primary}
    linear-gradient(to right, rgba(47, 136, 252, 0.513), #2f89fc);
  padding: 0.6rem;
  border-radius: 10px;
  color: #f5f5f5;

  & + a {
    margin-left: 1.8rem;
  }
`;

export default Buttons;
