import styled, { keyframes } from "styled-components";

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
  border-radius: 10px;
  background: #f0f0f0;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.dark};

  &:focus {
    outline: none;
    border-radius: 8px 8px 0 0;
  }

  &:focus ~ span {
    background-color: ${({ theme }) => theme.color.primary};
    animation: ${anim} 0.3s ease forwards;
  }

  &:focus + label {
    font-weight: 600;
  }

  &:not(:placeholder-shown):not(:focus):valid ~ span {
    background-color: ${({ theme }) => theme.color.success};
    transform: scale(1);
  }

  &:not(:placeholder-shown):not(:focus):invalid ~ span {
    background-color: ${({ theme }) => theme.color.danger};
    transform: scale(1);
  }

  &::placeholder {
    color: #adadad;
  }

  & ~ span {
    height: 3px;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: left;
    transform: scaleX(0);
  }
`;

export default Input;
