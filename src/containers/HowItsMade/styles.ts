import styled from 'styled-components';
import { Media } from '../../ui-kit/theme/breakpoints';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  ${Media.up.l} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledInfo = styled.div`
  display: flex;
  gap: 30px;
`;
