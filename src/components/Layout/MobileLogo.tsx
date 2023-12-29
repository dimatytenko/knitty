import { route } from '../../constants/routes';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { MainLink } from '../../ui-kit/Links';
import { StyledMobileLogo } from './styles';

export const MobileLogo = () => {
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
