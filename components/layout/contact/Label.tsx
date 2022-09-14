import styled from 'styled-components';

const Label = styled.label`
  margin-bottom: 0.3rem;
  font-weight: 600;

  &::after {
    content: '*';
    color: ${({ theme }) => theme.color.danger};
    margin-left: 2px;
  }
`;

export default Label;
