import { BurgerButton, CartButton } from '../../ui-kit/Buttons';
import { MobileLogo } from './MobileLogo';
import { StyledMobileHeader } from './styles';

export const MobileHeaderComponent = () => {
  return (
    <StyledMobileHeader id="mobile-header">
      <BurgerButton />
      <MobileLogo />
      <CartButton color="primary" />
    </StyledMobileHeader>
  );
};
