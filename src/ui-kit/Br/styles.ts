import styled from 'styled-components';
import { BrProps } from './types';
import { Media } from '../theme/breakpoints';

export const StyledBr = styled.div<BrProps>`
  margin-bottom: ${({ desktop }) => (desktop ? desktop + 'px' : 0)};
  ${Media.down.m} {
    margin-bottom: ${({ mobile, desktop }) =>
      mobile ? mobile + 'px' : desktop ? desktop : 0};
  }
`;
