import styled, { keyframes } from 'styled-components';
import { StyledSvg } from '../../Icon/Svg/styles';

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

const draw = keyframes`

 100% { 

  stroke-dashoffset: 17783;
  stroke-dasharray: 17783;
  }`;

export const StyledSkeleton = styled.div`
  svg {
    path {
      fill: transparent;
      stroke: ${({ theme }) => theme.palette.colors.primary};
      stroke-width: 0.3;
      stroke-dasharray: 500;

      animation: ${draw} 3s linear infinite;
    }
  }
`;
