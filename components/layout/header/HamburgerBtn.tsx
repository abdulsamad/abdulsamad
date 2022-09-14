import styled from 'styled-components';

import Button from '../../utils/Button';

// Updated Button Styles
const NewButton = styled(Button)`
  padding: 0.8em 1em;
  display: none;

  i {
    font-size: 1.3rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    height: 40px;
    width: 40px;
    padding: 5px;
    position: relative;
    background-color: #cecece;
    border: none;
    color: ${({ theme }) => theme.color.primaryTextColor};
    box-shadow: 2px 2px 4px rgba(87, 87, 87, 0.5);

    &:focus {
      outline: 1px solid rgba(87, 87, 87, 0.5);
    }
  }
`;

// SVG Styles
const SVG = styled.svg`
  height: 35px;
  width: 35px;
`;

const Line = styled.path`
  fill: none;
  stroke: currentColor;
  stroke-width: 6;
  transition: stroke-dasharray 450ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 450ms cubic-bezier(0.4, 0, 0.2, 1);
`;

interface LineProps {
  menuOpen: boolean;
}

const Top = styled(Line)<LineProps>`
  stroke-dasharray: ${({ menuOpen }) => (menuOpen ? 90 : 60)} 207;
  stroke-dashoffset: ${({ menuOpen }) => (menuOpen ? -134 : 0)};
  stroke-width: 6;
`;

const Middle = styled(Line)<LineProps>`
  stroke-dasharray: ${({ menuOpen }) => (menuOpen ? 1 : 60)} 60;
  stroke-dashoffset: ${({ menuOpen }) => (menuOpen ? -30 : 0)};
  stroke-width: 6;
`;

const Bottom = styled(Line)<LineProps>`
  stroke-dasharray: ${({ menuOpen }) => (menuOpen ? 90 : 60)} 207;
  stroke-dashoffset: ${({ menuOpen }) => (menuOpen ? -134 : 0)};
  stroke-width: 6;
`;

// HamburgerBtn Component
interface IHamburgerBtn {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerBtn = ({ menuOpen, toggleMenu }: IHamburgerBtn) => (
  <NewButton
    onClick={toggleMenu}
    aria-label="Toggle Navigation Menu"
    aria-expanded={menuOpen}>
    <SVG viewBox="0 0 100 100" aria-hidden="true">
      <Top
        menuOpen={menuOpen}
        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
      />
      <Middle menuOpen={menuOpen} d="M 20,50 H 80" />
      <Bottom
        menuOpen={menuOpen}
        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
      />
    </SVG>
  </NewButton>
);

export default HamburgerBtn;
