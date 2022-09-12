import styled from 'styled-components';

const Contact = styled.section`
  position: relative;
  padding: 2rem 0;
  scroll-margin-top: 70px;
  background: ${({ theme: { color } }) =>
    `linear-gradient(to right, ${color.white} 0%, ${color.white} 50%, ${color.primary} 50%, ${color.primary} 100%)`};
  overflow: hidden;
`;

export default Contact;
