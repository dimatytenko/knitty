import styled from 'styled-components';
import { IFilterButton } from './types';

import { Text2Bold } from '../Typography';
import { StyledCircle } from '../HoverCircle/styles';
import { TextBody2Bold } from '../Typography/styles';

export const StyledButtonText = styled(Text2Bold).attrs({
  $case: 'uppercase',
})`
  text-transform: uppercase;
`;

export const StyledMainButton = styled.button<{ $isincart?: boolean }>`
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

  &:disabled {
    border: 1px solid ${({ theme }) => theme.palette.colors.line};
    ${TextBody2Bold} {
      color: ${({ theme }) => theme.palette.colors.line};
    }
  }

  ${StyledButtonText} {
    color: ${({ theme }) => theme.palette.colors.background};
  }

  p {
    position: relative;
    z-index: 1;
  }

  &:hover ${StyledCircle} {
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

export const StyledCartBtn = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: flex-end;

  span {
    font-size: 14px;

    position: absolute;
    top: -10px;
    right: -10px;
  }
`;

export const StyledBurgerButton = styled.button`
  width: 24px;
  height: 16px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: absolute;
    height: 1px;
    width: 100%;

    left: 0;

    background-color: ${({ theme }) => theme.palette.colors.primary};

    &:first-of-type {
      top: 0;
    }

    &:last-of-type {
      bottom: 0;
    }
  }
`;
