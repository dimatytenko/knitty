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

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 17px;

  background-color: ${({ theme }) => theme.palette.colors.primary};

  ${StyledButtonText} {
    color: ${({ theme }) => theme.palette.colors.background};
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
