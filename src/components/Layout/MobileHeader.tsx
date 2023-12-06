import { route } from '../../constants/routes';
import { CartButton } from '../../ui-kit/Buttons';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { MainLink } from '../../ui-kit/Links';
import { StyledMobileHeader } from './styles';

export const MobileHeaderComponent = () => {
  return (
    <StyledMobileHeader>
      <button type="button">BURGER</button>
      <MainLink to={route.main.path}>
        <IconSvg
          type="logo-knitty"
          stroke="primary"
          fill="primary"
          width="100"
          height="39"
          viewBox="0 0 100 39"
        />
      </MainLink>
      <CartButton color="primary" />
    </StyledMobileHeader>
  );
};
