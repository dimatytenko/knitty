import { ILink } from './types';
import { IconSvg } from '../Icon/Svg';
import { StyledFooterLink, StyledLinkWithArrow, StyledNavLink } from './styles';
import { Text1Bold, Text2Bold, Text4Bold } from '../Typography';

export const NavigationLink = ({ to, children }: ILink) => {
  return (
    <StyledNavLink to={to}>
      <Text2Bold case="uppercase"> {children}</Text2Bold>
    </StyledNavLink>
  );
};

export const LinkWithArrow = ({ to, children }: ILink) => {
  return (
    <StyledLinkWithArrow to={to}>
      <Text4Bold case="uppercase"> {children}</Text4Bold>
      <IconSvg type="arrow" viewBox="0 0 24 24" width="24" height="24" />
    </StyledLinkWithArrow>
  );
};

export const FooterLink = ({ to, children }: ILink) => {
  return (
    <StyledFooterLink to={to}>
      <Text1Bold>{children}</Text1Bold>
    </StyledFooterLink>
  );
};
