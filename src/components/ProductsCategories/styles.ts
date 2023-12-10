import styled from 'styled-components';

import { Media } from '../../ui-kit/theme/breakpoints';

export const StyledProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 84px;
    border-top: 1px solid ${({ theme }) => theme.palette.colors.line};
  }

  li:not(:nth-child(-n + 4)) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.colors.line};
  }

  ${Media.down.m} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
