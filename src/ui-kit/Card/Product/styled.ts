import styled, { keyframes } from 'styled-components';
import { StyledFavoriteButton, StyledMainButton } from '../../Buttons/styles';
import { Link } from 'react-router-dom';

export const StyledProductCard = styled.div`
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
  height: 420px;

  overflow: hidden;

  ${StyledFavoriteButton} {
    position: absolute;
    z-index: 1;
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

export const StyledImageLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 420px;
  transition: all ${({ theme }) => theme.transitions.main};

  &:hover {
    transform: scale(1.05);
    filter: grayscale(50%);
  }
`;

export const StyledInfoContent = styled.div`
  padding: 15px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
