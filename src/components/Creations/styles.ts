import styled from 'styled-components';

import { Heading2, Text3Bold } from '../../ui-kit/Typography';

export const GloballyWrapper = styled.div`
  max-width: 1360px;
  margin: auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 40%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  justify-content: space-around;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const CraftedLegacy = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 620px;
margin: auto;
`
export const Tagline = styled.h1`


font-size: 37px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: center;

`
export const TitleWrapper = styled.h2`
text-transform: uppercase;
font-size: 15px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0em;
text-align: center;

`