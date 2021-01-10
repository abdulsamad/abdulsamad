import styled from 'styled-components';

const Error = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.danger};
  color: ${({ theme }) => theme.color.light};
  font-weight: 600;

  ::before {
    content: '\2757';
    color: white;
  }
`;

export default Error;
