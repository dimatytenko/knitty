import styled from 'styled-components';
import { StyledMainButton } from '../styles';

export const StyledGoogleBtn = styled(StyledMainButton)`
  position: relative;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.colors.primary};
  padding: 12px;
  margin-top: 10px;

  div {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
