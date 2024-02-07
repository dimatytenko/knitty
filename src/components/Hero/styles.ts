import styled from 'styled-components';

import { Heading1 } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const StyledHeroWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`;

export const StyledMainBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled(Heading1)`
  margin: 0;
  margin-top: 30px;
  width: 750px;
  text-align: center;
  text-transform: uppercase;

  ${Media.down.m} {
    width: 378px;
  }
  ${Media.down.xxs} {
    width: 100%;
    max-width: 378px;
  }
`;
