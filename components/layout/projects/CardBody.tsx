import styled from 'styled-components';

import { Heading4 } from '../../utils/Heading';

const CardBody = styled(Heading4)`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  max-width: 50ch;
  margin: 1em 0;
  font-weight: 400;
  font-size: 1.1rem;
`;

export default CardBody;
