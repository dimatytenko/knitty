import { NavLink, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { TextBody1Bold, TextBody2Bold } from '../Typography/styles';
import { StyledSvg } from '../Icon/Svg/styles';
import { StyledCircle } from '../HoverCircle/styles';
import { ALink } from './../../components/Contacts/styles';

const draw = keyframes`
 100% { stroke-dashoffset: 0 }`;

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
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

  ${StyledSvg} {
    transition: ${({ theme }) => theme.transitions.bounce};
    transition-property: transform;
  }

  &:hover {
    ${StyledSvg} {
      transform: translateX(5px);
    }
  }
`;

export const StyledHeroLink = styled(StyledLinkWithArrow)`
  margin-top: 40px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  padding: 14px 30px;
  border: 1px solid ${({ theme }) => theme.palette.colors.background};

  min-width: 278px;
  overflow: hidden;

  &:hover ${StyledCircle} {
    transform: scale(4);
  }
`;

export const StyledFooterLink = styled(Link)`
  &:hover ${TextBody1Bold} {
    color: ${({ theme }) => theme.palette.colors.hover};
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

export const ALinkStyled = styled(ALink)``;

export const StyledCategoriesLink = styled(StyledLinkWithArrow)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  justify-content: center;

  ${StyledSvg} {
    position: relative;
    z-index: 1;
  }

  ${TextBody2Bold} {
    position: relative;
    z-index: 1;
  }

  &:hover ${StyledCircle} {
    transform: scale(4);
  }
`;
