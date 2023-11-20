import styled from 'styled-components';
import { Media } from '../theme/breakpoints';

export const StyledBr = styled.div<{ $desktop?: number; $mobile?: number }>`
  margin-bottom: ${({ $desktop }) => ($desktop ? $desktop + 'px' : 0)};
  ${Media.down.m} {
    margin-bottom: ${({ $mobile, $desktop }) =>
      $mobile ? $mobile + 'px' : $desktop ? $desktop : 0};
  }
`;
