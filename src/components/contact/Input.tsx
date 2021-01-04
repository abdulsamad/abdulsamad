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
  background: rgba(63, 63, 63, 0.5);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 3px;
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
    font-weight: 600;
  }

  &::placeholder {
    color: #adadad;
  }
`;

export default Input;
