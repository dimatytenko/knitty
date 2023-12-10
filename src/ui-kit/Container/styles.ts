import styled from 'styled-components';

import { POINTS } from './types';
import { Media } from '../theme/breakpoints';

export const StyledContainer = styled.div<{ $point?: POINTS }>`
  margin: 0 auto;
  padding: 0 16px;
  max-width: ${({ $point }) => $point || POINTS.xl}px;

  ${Media.up.l} {
    padding: 0 30px;
  }
`;
