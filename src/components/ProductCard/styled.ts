import styled, { keyframes } from 'styled-components';
import {
  StyledFavoriteButton,
  StyledMainButton,
} from '../../ui-kit/Buttons/styles';

export const StyledProductCard = styled.div`
  width: 100%;
  height: 100%;
`;

const rotation = keyframes`
0%,
100% {
    transform: scale(1);
  }

50%{
    transform: scale(1.5);
  }
  `;

export const StyledImageContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  overflow: hidden;

  ${StyledFavoriteButton} {
    position: absolute;
    top: 20px;
    right: 20px;

    opacity: 0;
    transform: scale(2);

    transition: ${({ theme }) => theme.transitions.main};

    &:hover {
      animation: ${rotation} 2s ease-in-out infinite;
    }
  }

  &:hover ${StyledFavoriteButton} {
    opacity: 1;
    transform: scale(1);
  }

  ${StyledMainButton} {
    position: relative;
    bottom: 0;

    transform: translateY(100%);
    transition: ${({ theme }) => theme.transitions.main};

    &:hover {
      padding: 30px 0;
    }
  }

  &:hover ${StyledMainButton} {
    transform: translateY(-100%);
  }
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.palette.colors.grey};
`;

export const StyledInfoContent = styled.div`
  padding: 15px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
