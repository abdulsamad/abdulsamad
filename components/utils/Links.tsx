import styled, { css } from 'styled-components';

interface LinkProps {
  contrastColor?: boolean;
}

const sharedStyles = css<LinkProps>`
  text-decoration: none;
  color: ${({ theme, contrastColor }) =>
    contrastColor ? theme.color.white : theme.color.primary};

  & + & {
    margin-left: 1.5em;
  }
`;

export const Link = styled.a`
  ${sharedStyles}
`;

export const IconLink = styled.a`
  ${sharedStyles}
  font-size: 1.4rem;
  color: currentColor;
`;

export default Link;
