import styled, { keyframes } from 'styled-components';

const anim = keyframes`
  to {
    transform: scaleX(1);
  }
`;

const Input = styled.input`
  width: 100%;
  position: relative;
  padding: 0.85rem 0.5rem;
  border: none;
  border-radius: 8px;
  background: #3f3f3f;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.light};

  &:focus {
    outline: none;
    border-radius: 8px 8px 0 0;
  }

  &:focus ~ span {
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.color.primary};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: left;
    transform: scaleX(0);
    animation: ${anim} 0.3s ease forwards;
  }

  &:focus + label {
    /* animation: ${anim} 0.3s ease forwards; */
  }

  &::placeholder {
    color: #adadad;
  }
`;

export default Input;
