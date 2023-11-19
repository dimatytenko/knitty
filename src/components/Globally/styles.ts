import styled from 'styled-components';

import { Heading2, Text3Bold } from '../../ui-kit/Typography';

export const GloballyWrapper = styled.div`
  max-width: 1360px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 70px;
`;

export const ImageWrapper = styled.div`
  width: 60%;
  height: 700px;
  background-color: ${({ theme }) => theme.palette.colors.system};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 700px;
  padding: 120px 16px 50px 0;
`;

export const Title = styled(Heading2)`
  display: block;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const Subtitle = styled(Text3Bold).attrs({
  case: 'uppercase',
})`
  text-align: center;
`;

export const SubtitlesWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
