import { Link } from 'react-router-dom';
import {
  GloballyWrapper,
  ContentWrapper,
  ImageWrapper,
  Image,
  ButtonWrapper,
} from './styles';
import woman from './assets/woman.jpg';
import man from './assets/man.jpg';
import { LinkWithArrow } from '../../ui-kit/Links';
import { Container } from '../../components/Layout/styles';
import { route } from '../../constants/routes';

export const AllKnitsComponent = () => {
  return (
    <GloballyWrapper>
      <Container>
        <ContentWrapper>
          <ImageWrapper>
            <Link to={route.woman.path}>
              <Image src={woman} alt="woman" />
            </Link>
          </ImageWrapper>
          <ImageWrapper>
            <Link to={route.man.path}>
              <Image src={man} alt="man" />
            </Link>
          </ImageWrapper>
          <ButtonWrapper>
            <LinkWithArrow to={route.gallery.path}>see all knits</LinkWithArrow>
          </ButtonWrapper>
        </ContentWrapper>
      </Container>
    </GloballyWrapper>
  );
};
