import { Link } from 'react-router-dom';
import {
  GloballyWrapper,
  ContentWrapper,
  ImagesWrapper,
  CardWrapper,
  ImageWrapper,
  Image,
  ButtonWrapper,
  Text,
} from './styles';
import woman from './assets/woman.jpg';
import man from './assets/man.jpg';
import { LinkWithArrow } from '../../ui-kit/Links';
import { Container } from '../../components/Layout/styles';
import { route, paths } from '../../constants/routes';

export const AllKnitsComponent = () => {
  return (
    <GloballyWrapper>
      <Container>
        <ContentWrapper>
          <ImagesWrapper>
            <CardWrapper>
              <ImageWrapper>
                <Link to={route.gallery.get({ tag: paths.man })}>
                  <Image src={man} alt="man" />
                </Link>
              </ImageWrapper>
              <Text>man</Text>
            </CardWrapper>
            <CardWrapper>
              <ImageWrapper>
                <Link to={route.gallery.get({ tag: paths.woman })}>
                  <Image src={woman} alt="woman" />
                </Link>
              </ImageWrapper>
              <Text>woman</Text>
            </CardWrapper>
          </ImagesWrapper>
          <ButtonWrapper>
            <LinkWithArrow to={route.gallery.get({ tag: paths.all })}>
              see all knits
            </LinkWithArrow>
          </ButtonWrapper>
        </ContentWrapper>
      </Container>
    </GloballyWrapper>
  );
};
