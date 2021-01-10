import styled from 'styled-components';

const Button = styled.button`
  text-decoration: none;
  background: ${({ theme }) => theme.color.primary}
    linear-gradient(to right, rgba(47, 136, 252, 0.513), #2f89fc);
  padding: 0.6rem;
  border: none;
  border-radius: 10px;
  color: #f5f5f5;

  & + button {
    margin-left: 1.5rem;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
