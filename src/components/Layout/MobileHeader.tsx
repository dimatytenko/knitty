import { route } from '../../constants/routes';
import { BurgerButton, CartButton } from '../../ui-kit/Buttons';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { MainLink } from '../../ui-kit/Links';
import { StyledMobileHeader, StyledMobileLogo } from './styles';

const Logo = () => {
  return (
    <StyledMobileLogo>
      <MainLink to={route.main.path}>
        <IconSvg
          type="logo-knitty"
          stroke="none"
          fill="primary"
          width="170"
          height="66"
          viewBox="0 0 170 66"
        />
      </MainLink>
    </StyledMobileLogo>
  );
};

export const MobileHeaderComponent = () => {
  return (
    <StyledMobileHeader id="mobile-header">
      <BurgerButton />
      <Logo />
      <CartButton color="primary" />
    </StyledMobileHeader>
  );
};
