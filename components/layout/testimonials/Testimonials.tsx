import styled from 'styled-components';

const Testimonials = styled.section`
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  color: ${({ theme }) => theme.color.text};
  padding: 2em 0 4em 0;
  scroll-margin-top: 60px;
`;

export default Testimonials;
