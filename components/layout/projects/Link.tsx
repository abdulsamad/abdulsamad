import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.text};
  padding: 5px 12px;
  position: relative;

  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    width: calc(100% - 2.5ch);
    background-color: ${({ theme }) => theme.color.text};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 300ms ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  & + & {
    margin: 0 0.5em;
  }

  i,
  svg {
    position: absolute;
    top: 50%;
    right: -8px;
    transform: translateY(-50%);
    margin: 0 0 0 3px;
  }
`;

export default Link;
