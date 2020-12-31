import styled from 'styled-components';

const SubmitBtn = styled.button`
  height: 2.5rem;
  width: 10ch;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.light};
  border: none;
`;

export default SubmitBtn;
