import { IconSvg } from '../../ui-kit/Icon/Svg';
import { HeaderBlockComponent } from '../HeaderBlock';
import { HeaderBlockLeft } from '../HeaderBlocktLeft';
import { HeaderBlockRight } from '../HeaderBlocktRight';
import { listLeft, listRight } from './constants';
import { Container, StyledHeader, StyledLogoWrapper } from './styles';

export const HeaderComponent = () => {
  return (
    <StyledHeader>
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
    </StyledHeader>
  );
};
