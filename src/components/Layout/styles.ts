import styled from 'styled-components';

import { Media } from '../../ui-kit/theme/breakpoints';

export const StyledLayout = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

// need refactoring
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  ${Media.up.l} {
    padding: 0 32px;
  }

  ${Media.up.xxl} {
    width: 1440px;
  }
`;

export const Main = styled.main<{ $isMobile?: boolean }>`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
`;

// Header
export const StyledHeader = styled.header`
  background-color: grey;
  padding: 15px 0;
`;

// Footer
export const StyledFooter = styled.footer`
  background-color: grey;
  padding: 15px 0;
`;
