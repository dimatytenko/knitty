import styled from 'styled-components';
import { StyledHeaderTop } from './HeaderBlockToptLeft/styles';

export const StyledHeaderBlock = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:last-of-type {
    align-items: flex-end;

    ${StyledHeaderTop} {
      justify-content: flex-end;
    }
  }
`;

export const StyledHeaderBottom = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  gap: 30px;
`;
