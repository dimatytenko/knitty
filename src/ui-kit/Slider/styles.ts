import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import { SliderProps } from './types';
import { IconSvg } from '../Icon/Svg';

export const StyledSwiper = styled(Swiper)<SliderProps>`
  position: relative;
  width: 100%;
  max-width: 100%;
`;

export const PrevArrow = styled(IconSvg).attrs({
  type: 'arrow-light',
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  stroke: 'back',
})`
  display: block;
  transform: rotate(90deg);
`;

export const NextArrow = styled(IconSvg).attrs({
  type: 'arrow-light',
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
  stroke: 'back',
})`
  display: block;
  transform: rotate(-90deg);
`;

export const ArrowButton = styled.div<{
  $position?: 'right' | 'left';
}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) => ($position === 'right' ? `right: 5px;` : `left: 5px;`)};
  z-index: 10;
  padding: 6px;
  cursor: pointer;
  border-radius: 50%;
  transition: all ${({ theme }) => theme.transitions.main};

  &:hover {
    background: ${({ theme }) => theme.palette.colors.background};
  }

  & > svg > path {
    transition: stroke ${({ theme }) => theme.transitions.main};
  }

  &:hover > svg > path {
    stroke: ${({ theme }) => theme.palette.colors.primary};
  }
`;
