import styled from 'styled-components';

interface HeadingProps {
  textAlign?: string;
  margin?: string;
}

const fontWeight = 600;

export const Heading1 = styled.h1<HeadingProps>`
  font-size: 2.5rem;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  font-weight: ${fontWeight};
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

export const Heading2 = styled.h2<HeadingProps>`
  font-size: 2rem;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  font-weight: ${fontWeight};
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

export const Heading3 = styled.h3<HeadingProps>`
  font-size: 1.75rem;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  font-weight: ${fontWeight};
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

export const Heading4 = styled.h4<HeadingProps>`
  font-size: 1.5rem;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  font-weight: ${fontWeight};
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

export const Heading5 = styled.h5<HeadingProps>`
  font-size: 1.25rem;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  font-weight: ${fontWeight};
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

export const Heading6 = styled.h6<HeadingProps>`
  font-size: 1rem;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  font-weight: ${fontWeight};
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

export default Heading2;
