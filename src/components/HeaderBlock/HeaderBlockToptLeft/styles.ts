import styled from 'styled-components';

import { TextColor } from '../../../ui-kit/Typography/types';

export const StyledHeaderTop = styled.div<{ color?: TextColor }>`
  width: 100%;
  height: 40px;
  padding-bottom: 9px;
  border-bottom: 1px solid
    ${({ theme, color }) =>
      color === 'background'
        ? theme.palette.colors[color]
        : theme.palette.colors.line};

  display: flex;
  align-items: center;
  gap: 10px;
`;
