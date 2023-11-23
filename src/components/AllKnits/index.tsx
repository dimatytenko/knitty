import { Link } from 'react-router-dom';
import { GloballyWrapper, ContentWrapper, ImageWrapper, Image } from './styles';
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
          <Link to={route.woman.path}>
            <ImageWrapper>
              <Image src={woman} alt="woman" />
            </ImageWrapper>
          </Link>
          <Link to={route.man.path}>
            <ImageWrapper>
              <Image src={man} alt="man" />
            </ImageWrapper>
          </Link>
          <LinkWithArrow to={route.gallery.path}>see all knits</LinkWithArrow>
        </ContentWrapper>
      </Container>
    </GloballyWrapper>
  );
};
