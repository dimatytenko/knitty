import styled from 'styled-components';
import { IFilterButton } from './types';

import { Text2Bold } from '../Typography';

export const StyledButtonText = styled(Text2Bold).attrs({
  $case: 'uppercase', //dont't work
})`
  text-transform: uppercase;
`;

export const StyledMainButton = styled.button`
  width: 100%;
  position: relative;
  overflow: hidden;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 17px;
  border: 1px solid ${({ theme }) => theme.palette.colors.primary};

  background-color: ${({ $isincart, theme }) =>
    $isincart ? theme.palette.colors.alert : theme.palette.colors.background};

  ${StyledButtonText} {
    color: ${({ theme }) => theme.palette.colors.background};
  }

  span {
    display: block;
    position: absolute;
    z-index: 0;
    transform-origin: bottom center;

    left: 0;
    top: 50%;

    width: 200px;
    height: 200px;

    border-radius: 50%;

    transform: scale(0);

    background-color: rgba(255, 255, 255, 0.3);

    transition: ${({ theme }) => theme.transitions.main};
  }

  p {
    position: relative;
    z-index: 1;
  }

  &:hover span {
    transform: scale(4);
  }
`;

export const StyledFilterButton = styled.button<IFilterButton>`
  display: inline-flex;

  padding: 14px 20px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.palette.colors.grey};
  transition: ${({ theme }) => theme.transitions.main};

  ${StyledButtonText} {
    color: ${({ $active, theme }) =>
      $active ? theme.palette.colors.background : 'inherit'};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.colors.primary};
  }

  background-color: ${({ $active, theme }) =>
    $active ? theme.palette.colors.primary : 'transparent'};
`;

export const StyledButtonWithArrow = styled(StyledMainButton)`
  gap: 10px;

  svg {
    position: relative;
    z-index: 1;
    transition: ${({ theme }) => theme.transitions.bounce};
    transition-property: transform;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

export const StyledFavoriteButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
