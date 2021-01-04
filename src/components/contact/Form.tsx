import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 35vw;
  max-width: 700px;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Form;
