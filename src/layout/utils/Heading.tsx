import styled from "styled-components";

interface HeadingProps {
  textAlign?: string;
}

const Heading = styled.h2<HeadingProps>`
  margin: 0 0 2rem 0;
  font-size: 1.8rem;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  font-weight: 500;
`;

export default Heading;
