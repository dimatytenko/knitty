import {
  GloballyWrapper,
  ContentWrapper,
  ImageWrapper,
  Content,
  Title,
  Subtitle,
  SubtitlesWrapper,
  Image,
} from './styles';
import globally from './assets/globally.jpg';
import { Container } from '../Layout/styles';
import { useTranslation } from 'react-i18next';

export const GloballyComponent = () => {
  const { t } = useTranslation();
  return (
    <GloballyWrapper>
      <Container>
        <ContentWrapper>
          <ImageWrapper>
            <Image src={globally} alt="globally" />
          </ImageWrapper>
          <Content>
            <Title>{t('globally.title')}</Title>
            <SubtitlesWrapper>
              <Subtitle>{t('globally.postTitle')} </Subtitle>
              <Subtitle>{t('globally.text')}</Subtitle>
            </SubtitlesWrapper>
          </Content>
        </ContentWrapper>
      </Container>
    </GloballyWrapper>
  );
};
