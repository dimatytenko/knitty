import styled from 'styled-components';

import { Media } from '../../ui-kit/theme/breakpoints';
import { Heading3 } from '../../ui-kit/Typography';

export const GloballyWrapper = styled.div``;

export const Text = styled(Heading3)`
  ${Media.up.m} {
    opacity: 0;
  }

  position: absolute;
  left: 15px;
  bottom: 15px;
  z-index: 1;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.colors.background};
  transition: ${({ theme }) => theme.transitions.main};
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;

  ${Media.down.m} {
    flex-direction: column;
    align-items: center;
    gap: 35px;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${({ theme }) => theme.transitions.main};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.main};

  ${Media.down.m} {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    filter: brightness(0.5);
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  max-width: 536px;
  overflow: hidden;

  &:hover {
    ${ImageWrapper} {
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
      filter: brightness(0.5);
    }

    ${Image} {
      transform: scale(1.1);
    }

    ${Text} {
      opacity: 1;
    }
  }

  ${Media.up.m} {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50px;
      right: 29px;
      background-color: ${({ theme }) => theme.palette.colors.background};
      z-index: 1;
      opacity: 0;
      transition: ${({ theme }) => theme.transitions.main};
    }

    &::before {
      width: 0;
      height: 1px;
    }
    &::after {
      width: 1px;
      height: 0;
    }

    &:hover::before {
      width: 80px;
      opacity: 1;
    }
    &:hover::after {
      height: 80px;
      opacity: 1;
    }
  }
`;

export const ButtonWrapper = styled.div`
  align-self: end;

  ${Media.down.m} {
    align-self: center;
  }
`;
