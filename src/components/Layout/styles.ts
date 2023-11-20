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
  max-width: 1360px;

  ${Media.up.l} {
    padding: 0 30px;
  }
`;

export const Main = styled.main<{ $isMobile?: boolean }>`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
`;

// Header
export const StyledHeader = styled.header`
  padding: 30px 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

// Footer
export const StyledFooter = styled.footer`
  padding-bottom: 24px;
`;

export const FooterContent = styled.div`
  display: flex;
  gap: 157px;
`;

export const LinksBlockWrapper = styled.div`
  li {
    font-family: inherit;
    font-size: 14px;
    line-height: 1;
  }
`;

export const RightBlock = styled.div`
  width: 100%;
`;
export const LeftBlock = styled.div`
  width: fit-content;
`;

export const RightBlockTop = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  ul {
    margin-top: 20px;

    display: flex;
    flex-direction: column;
  }
`;

export const RightBlockBottom = styled.div`
  margin-top: 131px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const StyledLogoWrapper = styled.div`
  margin: 0 45px;
  width: 170px;
`;
