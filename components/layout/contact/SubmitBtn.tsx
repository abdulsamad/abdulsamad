import styled from 'styled-components';
import Button from '../../utils/Button';

const SubmitBtn = styled(Button)`
  width: 100%;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default SubmitBtn;
