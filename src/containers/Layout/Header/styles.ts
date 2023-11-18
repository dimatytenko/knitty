import styled from 'styled-components';
import { Container } from '../../../components/Layout/styles';
import { StyledHeaderTop } from '../../../components/HeaderBlocktLeft/styles';

export const StyledHeaderWrapper = styled.header`
  ${Container} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding: 30px 0;
  }
`;

export const StyledLogoWrapper = styled.div`
  margin: 0 45px;
  width: 170px;
`;

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
