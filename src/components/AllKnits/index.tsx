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
              <Link to={route.gallery.get({ tag: paths.man })}>
                <ImageWrapper>
                  <Image src={man} alt="man" />
                </ImageWrapper>
                <Text>man</Text>
              </Link>
            </CardWrapper>
            <CardWrapper>
              <Link to={route.gallery.get({ tag: paths.woman })}>
                <ImageWrapper>
                  <Image src={woman} alt="woman" />
                </ImageWrapper>
                <Text>woman</Text>
              </Link>
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
