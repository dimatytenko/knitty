import styled from 'styled-components';
import { IFilterButton } from './types';

import { Text2Bold } from '../Typography';

export const StyledButtonText = styled(Text2Bold).attrs({
  $case: 'uppercase',
})``;

export const StyledMainButton = styled.button`
  width: 100%;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 17px;

  background-color: ${({ theme }) => theme.palette.colors.black};

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
    border: 1px solid ${({ theme }) => theme.palette.colors.black};
  }

  background-color: ${({ $active, theme }) =>
    $active ? theme.palette.colors.black : 'transparent'};
`;

export const StyledrButtonWithArrow = styled(StyledMainButton)`
  gap: 5px;
`;
