import styled from "styled-components";

interface ButtonProps {
  outlined?: boolean;
}

const Button = styled.button<ButtonProps>`
  text-decoration: none;
  background: ${({ theme, outlined }) =>
    outlined
      ? "transparent"
      : `${theme.color.primary} linear-gradient(to right, rgba(47, 136, 252, 0.513), #2f89fc)`};
  padding: 0.6rem;
  border: ${({ theme, outlined }) =>
    outlined ? `1px solid ${theme.color.primary}` : "none"};
  border-radius: 10px;
  color: ${({ theme }) => theme.color.text};

  & + button {
    margin-left: 1.5rem;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
