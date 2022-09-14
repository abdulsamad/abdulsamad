import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 35vw;
  max-width: 700px;
  padding: 2rem 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0;
    width: 100%;
  }
`;

export default Form;
