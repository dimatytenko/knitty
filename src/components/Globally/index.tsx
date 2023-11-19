import {
  GloballyWrapper,
  ContentWrapper,
  ImageWrapper,
  Content,
  Title,
  Subtitle,
  SubtitlesWrapper,
} from './styles';

export const GloballyComponent = () => {
  return (
    <GloballyWrapper>
      <ContentWrapper>
        <ImageWrapper></ImageWrapper>
        <Content>
          <Title>Knitti for Globally</Title>
          <SubtitlesWrapper>
            <Subtitle>
              We take pride in bringing Ukrainian design to the world
            </Subtitle>
            <Subtitle>
              Knitty is not just a brand, it is our inspiration, the warmth of
              our hands and soul embodied in every thread. Welcome to the world
              of traditions, style, and Ukrainian pride
            </Subtitle>
          </SubtitlesWrapper>
        </Content>
      </ContentWrapper>
    </GloballyWrapper>
  );
};
