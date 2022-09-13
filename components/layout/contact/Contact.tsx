import styled from 'styled-components';

const Contact = styled.section`
  position: relative;
  padding: 2em 0;
  scroll-margin-top: 70px;
  background: ${({ theme: { color } }) =>
    `linear-gradient(to right, ${color.white} 0%, ${color.white} 50%, ${color.primary} 50%, ${color.primary} 100%)`};
  overflow: hidden;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0;
    background: ${({ theme }) => theme.color.light};
  }
`;

export default Contact;
