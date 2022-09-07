import styled from 'styled-components';

interface GitHubLinkProps {
  textAlign?: string;
}

const GitHubLink = styled.a<GitHubLinkProps>`
  text-decoration: none;
  color: ${({ theme }) => theme.color.light};
  padding: 1rem 1.2rem;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 20px;
  margin: 4rem auto 0 auto;
`;

export default GitHubLink;
