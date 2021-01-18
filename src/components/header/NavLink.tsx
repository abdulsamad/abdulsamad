import styled from 'styled-components';

const NavLink = styled.a`
  position: relative;
  font-size: 1.2rem;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 30px;
  color: ${({ theme }) => theme.color.font};
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 3px;
    width: 100%;
    display: block;
    background-color: ${({ theme }) => theme.color.font};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export default NavLink;
