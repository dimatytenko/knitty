import { Link } from 'react-router-dom';
import { ILink } from './types';
import { IconSvg } from '../Icon/Svg';
import { StyledLinkWithArrow, StyledNavLink } from './styles';
import { Text1Bold } from '../Typography';

export const NavigationLink = ({ to, children }: ILink) => {
  return (
    <StyledNavLink to={to}>
      <Text1Bold case="uppercase"> {children}</Text1Bold>
    </StyledNavLink>
  );
};

export const LinkWithArrow = ({ to, children }: ILink) => {
  return (
    <StyledLinkWithArrow to={to}>
      <Text1Bold case="uppercase"> {children}</Text1Bold>
      <IconSvg type="arrow" viewBox="0 0 24 24" width="24" height="24" />
    </StyledLinkWithArrow>
  );
};

export const FooterLink = ({ to, children }: ILink) => {
  return (
    <Link to={to}>
      <Text1Bold color="primary">{children}</Text1Bold>
    </Link>
  );
};
