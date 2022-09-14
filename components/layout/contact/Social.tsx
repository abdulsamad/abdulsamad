import styled from 'styled-components';

const Social = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  color: ${({ theme }) => theme.color.white};
  padding: 2em 10em;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    position: relative;
    color: ${({ theme }) => theme.color.text};
    top: 0;
    left: 0;
    padding: 2em 0;
    width: 100%;
  }
`;

export default Social;
