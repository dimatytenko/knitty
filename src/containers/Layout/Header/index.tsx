import { HeaderBlockComponent } from '../../../components/HeaderBlock';
import { HeaderBlockLeft } from '../../../components/HeaderBlocktLeft';
import { HeaderBlockRight } from '../../../components/HeaderBlocktRight';
import { Container } from '../../../components/Layout/styles';
import { IconSvg } from '../../../ui-kit/Icon/Svg';
import { listLeft, listRight } from './constants';
import { StyledHeaderWrapper, StyledLogoWrapper } from './styles';

export const Header = () => {
  return (
    <StyledHeaderWrapper>
      <Container>
        <HeaderBlockComponent
          renderTop={<HeaderBlockLeft />}
          navList={listLeft}
        />
        <StyledLogoWrapper>
          <IconSvg
            type="logo-knitty"
            stroke="none"
            width="170"
            height="66"
            viewBox="0 0 170 66"
          />
        </StyledLogoWrapper>
        <HeaderBlockComponent
          renderTop={<HeaderBlockRight />}
          navList={listRight}
        />
      </Container>
    </StyledHeaderWrapper>
  );
};
