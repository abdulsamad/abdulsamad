import styled from 'styled-components';

import { ButtonLink } from '../../utils/Button';

const GitHubLink = styled(ButtonLink)`
  border: 1px solid ${({ theme }) => theme.color.primary};
  margin: 2em auto 0 auto;
`;

export default GitHubLink;
