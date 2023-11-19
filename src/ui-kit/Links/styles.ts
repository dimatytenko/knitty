import { NavLink, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { TextBody1Bold } from '../Typography/styles';
import { StyledSvg } from '../Icon/Svg/styles';

const draw = keyframes`
 100% { stroke-dashoffset: 0 }`;

export const StyledNavLink = styled(NavLink)`
  position: relative;

  ${StyledSvg} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: ${({ theme }) => theme.transitions.main};

    path {
      visibility: hidden;
    }
  }

  &.active {
    ${StyledSvg} {
      path {
        visibility: visible;

        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;

        animation: ${draw} 2s linear forwards;
      }
    }
  }
`;

export const StyledLinkWithArrow = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    transition-property: transform;
    transition: ${({ theme }) => theme.transitions.bounce};
  }

  &:hover {
    svg {
      transform: translateX(5px);
    }
  }
`;

export const StyledFooterLink = styled(Link)`
  ${TextBody1Bold} {
    color: ${({ theme }) => theme.palette.colors.grey};
  }
`;

export const StyledMainLink = styled(Link)`
  ${TextBody1Bold} {
    display: inline-flex;
  }
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
