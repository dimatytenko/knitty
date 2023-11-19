import styled from 'styled-components';
import { StyledHeaderTop } from '../HeaderBlocktLeft/styles';

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

  nav {
    margin-top: 20px;

    ul {
      display: flex;
      gap: 30px;
    }
  }
`;
