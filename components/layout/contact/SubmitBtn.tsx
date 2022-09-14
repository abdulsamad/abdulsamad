import styled from 'styled-components';
import Button from '../../utils/Button';

const SubmitBtn = styled(Button)`
  width: 100%;
  margin: 1em 0 0 0;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default SubmitBtn;
