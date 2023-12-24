import styled from 'styled-components';

import { Media } from '../../ui-kit/theme/breakpoints';
import { StyledMainLink } from '../../ui-kit/Links/styles';
import { StyledGSAPWrapper } from '../../ui-kit/GSAPWrapper/styles';

export const StyledLayout = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.colors.background};
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
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  padding: 30px 0;
  width: 100%;
  /* max-width: 100vw; */
`;

export const StyledHeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  & > ${StyledMainLink} {
    padding: 0 45px;
  }

  ${StyledGSAPWrapper} {
    width: fit-content;
  }
`;

// Footer
export const StyledFooter = styled.footer`
  padding-bottom: 24px;
`;

export const FooterContent = styled.div`
  ${Media.up.m} {
    display: flex;
    justify-content: space-between;
  }

  ${Media.up.l} {
    gap: 157px;
  }
`;

export const LinksBlockWrapper = styled.div`
  li {
    font-family: inherit;
    font-size: 14px;
    line-height: 1;
  }
`;

export const RightBlock = styled.div`
  margin-top: 50px;

  ${Media.up.m} {
    margin-top: unset;
  }
  ${Media.up.l} {
    width: 100%;
  }
`;
export const LeftBlock = styled.div`
  width: fit-content;
`;

export const RightBlockTop = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  ${Media.up.m} {
    grid-template-columns: repeat(4, 1fr);
    gap: unset;
  }

  ul {
    margin-top: 20px;

    display: flex;
    flex-direction: column;
  }
`;

export const RightBlockBottom = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  ${Media.up.m} {
    margin-top: 131px;
    grid-template-columns: 1fr 1fr;
    gap: unset;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StyledMobileHeader = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;

  background-color: transparent;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  padding: 10px;
  padding-right: 15px;

  backdrop-filter: blur(20px) brightness(130%);
`;

export const StyledMobileLogo = styled.div`
  a {
    transform: scale(0.7);
  }
`;
