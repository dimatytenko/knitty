import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)``;

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
