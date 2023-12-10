import styled, { keyframes } from 'styled-components';

const li = keyframes`
100% {
    transform: rotate(1turn);
  }
`;

export const StyledLoader = styled.div`
  width: 100%;
  aspect-ratio: 1;
  color: #ffffff;
  border: 2px solid;
  display: grid;
  box-sizing: border-box;
  animation: ${li} 10s infinite linear;

  &::before,
  &::after {
    content: '';
    grid-area: 1/1;
    margin: auto;
    width: 70.7%;
    aspect-ratio: 1;
    border: 2px solid;
    box-sizing: content-box;
    animation: inherit;
  }
  &::after {
    width: 50%;
    aspect-ratio: 1;
    border: 2px solid;
    animation-duration: 6s;
  }
`;
