import { IProps } from './types';
import { IconSvg } from '../Icon/Svg';
import {
  StyledFooterLink,
  StyledLinkWithArrow,
  StyledMainLink,
  StyledNavLink,
} from './styles';
import { Text1Bold, Text2Bold, Text4Bold } from '../Typography';

export const NavigationLink = ({ to, children }: IProps) => {
  return (
    <StyledNavLink to={to}>
      <Text2Bold case="uppercase"> {children}</Text2Bold>
      <IconSvg
        type="nav-stroke"
        width="77"
        height="30"
        viewBox="0 0 77 30"
        fill="none"
      />
    </StyledNavLink>
  );
};

export const LinkWithArrow = ({ to, children }: IProps) => {
  return (
    <StyledLinkWithArrow to={to}>
      <Text4Bold case="uppercase"> {children}</Text4Bold>
      <IconSvg type="arrow" viewBox="0 0 24 24" width="24" height="24" />
    </StyledLinkWithArrow>
  );
};

export const MainLink = ({ to, children }: IProps) => {
  return (
    <StyledMainLink to={to}>
      <Text1Bold>{children}</Text1Bold>
    </StyledMainLink>
  );
};

export const FooterLink = ({ to, children }: IProps) => {
  return (
    <StyledFooterLink to={to}>
      <Text1Bold>{children}</Text1Bold>
    </StyledFooterLink>
  );
};
