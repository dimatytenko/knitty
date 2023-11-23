import {
  GloballyWrapper,
  ContentWrapper,
  ImageWrapper,
  Content,
  Title,
  Subtitle,
  SubtitlesWrapper,
  CraftedLegacy,
  Tagline,
  TitleWrapper,
} from './styles';
import ImgHeader3 from '../Creations/Image/ImgHeader3.svg';
import ImgHeader4 from '../Creations/Image/ImgHeader4.svg';
import { Br } from '../../ui-kit/Br';
export const CreationsComponent = () => {
  return (
    <GloballyWrapper>
      <CraftedLegacy>
<TitleWrapper>Knots of Ukrainian Culture</TitleWrapper>

      <Tagline> Our handcrafted creations are a part of our nation's history, reflecting
        Ukrainian heritage and artistic craftsmanship in every pattern and knot
        </Tagline> 

      </CraftedLegacy>
      <Br desktop={100} mobile={60} />
      <ContentWrapper>
        <ImageWrapper>
          <img src={ImgHeader3} alt="images-header" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={ImgHeader4} alt="images-header" />
        </ImageWrapper>
        <Content>
          <Title>Alena Stotska</Title>
          <SubtitlesWrapper>
            <Subtitle>
              Meet our visionary founder, a passionate advocate for preserving
              Ukrainian craftsmanship and traditions. With a deep love for
              knitting, brings a unique blend of creativity and cultural pride
              to our collection of Ukrainian knitwear, creating a bridge between
              heritage and contemporary fashion.
            </Subtitle>
          </SubtitlesWrapper>
        </Content>
      </ContentWrapper>
    </GloballyWrapper>
  );
};
