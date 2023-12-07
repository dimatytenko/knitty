import styled from 'styled-components';

import { Heading2, Text3Bold } from '../../ui-kit/Typography';
import { Media } from '../../ui-kit/theme/breakpoints';

export const GloballyWrapper = styled.div``;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 645px;
  background-color: ${({ theme }) => theme.palette.colors.system};

  ${Media.down.m} {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: calc(100% - 645px);
  height: 700px;
  padding: 120px 90px 50px;

  ${Media.down.xl} {
    min-width: 405px;
    padding: 120px 30px 50px;
  }
  ${Media.down.m} {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    width: 100%;
    height: 100%;
  }
  ${Media.down.xs} {
    padding: 45px 16px 16px;
  }
`;

export const Title = styled(Heading2)`
  display: block;
  margin: 0 auto;
  margin-bottom: 40px;

  ${Media.down.m} {
    color: ${({ theme }) => theme.palette.colors.background};
  }
`;

export const Subtitle = styled(Text3Bold)`
  text-align: center;
  text-transform: uppercase;

  ${Media.down.m} {
    color: ${({ theme }) => theme.palette.colors.background};
  }
`;

export const SubtitlesWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
