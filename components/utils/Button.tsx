import styled, { css } from 'styled-components';

interface ButtonProps {
  outlined?: boolean;
}

const sharedStyles = css<ButtonProps>`
  background: ${({ theme, outlined }) =>
    outlined ? 'transparent' : `${theme.color.buttonBackground}`};
  padding: 0.75em 1.25em;
  font-size: 1rem;
  border: ${({ theme, outlined }) =>
    outlined ? `1px solid ${theme.color.primary}` : 'none'};
  border-radius: 9999px;
  color: ${({ theme, outlined }) =>
    outlined ? theme.color.text : theme.color.white};

  & + & {
    margin-left: 1.5em;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button<ButtonProps>`
  ${sharedStyles}
`;

export const ButtonLink = styled.a<ButtonProps>`
  ${sharedStyles}
  text-decoration: none;
`;

export default Button;
