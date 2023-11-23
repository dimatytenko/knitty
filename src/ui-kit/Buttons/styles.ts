import styled from 'styled-components';
import { TextBody2Bold } from '../Typography/styles';
import { StyledSvg } from '../Icon/Svg/styles';

export const StyledMainButton = styled.button`
  width: 100%;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 17px;

  background-color: ${({ theme }) => theme.palette.colors.black};

  ${TextBody2Bold} {
    color: ${({ theme }) => theme.palette.colors.white};
  }
`;

export const StyledFilterButton = styled.button`
  display: inline-flex;

  padding: 14px 20px;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.palette.colors.grey};
  transition: ${({ theme }) => theme.transitions.main};

  ${TextBody2Bold} {
    color: ${({ active, theme }) =>
      active ? theme.palette.colors.white : 'inherit'};
    text-transform: uppercase;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.colors.black};
  }

  background-color: ${({ active, theme }) =>
    active ? theme.palette.colors.black : 'transparent'};
`;

export const StyledrButtonWithArrow = styled(StyledMainButton)`
  gap: 5px;

  ${StyledSvg} {
    fill: white;
    stroke: white;
  }
`;
