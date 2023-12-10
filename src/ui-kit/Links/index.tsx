import { IProps, IPropsWithHref } from './types';
import { IconSvg } from '../Icon/Svg';
import {
  StyledFooterLink,
  StyledHeroLink,
  StyledLinkWithArrow,
  StyledMainLink,
  StyledNavLink,
  ALinkStyled,
  StyledCategoriesLink,
} from './styles';
import { Text1Bold, Text2Bold } from '../Typography';
import { HoverCircle } from '../HoverCircle';

export const NavigationLink = ({ to, children, color }: IProps) => {
  return (
    <StyledNavLink to={to}>
      <Text2Bold $case="uppercase" color={color}>
        {children}
      </Text2Bold>
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
      <Text2Bold $case="uppercase"> {children}</Text2Bold>
      <IconSvg type="arrow" viewBox="0 0 24 24" width="24" height="24" />
    </StyledLinkWithArrow>
  );
};

export const CategoriesLink = ({ to, children }: IProps) => {
  return (
    <StyledCategoriesLink to={to}>
      <Text2Bold $case="uppercase"> {children}</Text2Bold>
      <IconSvg type="arrow" viewBox="0 0 24 24" width="24" height="24" />
      <HoverCircle />
    </StyledCategoriesLink>
  );
};

export const HeroLink = ({ to, children }: IProps) => {
  return (
    <StyledHeroLink to={to}>
      <Text2Bold $case="uppercase" color="background">
        {children}
      </Text2Bold>
      <IconSvg
        fill="back"
        stroke="back"
        type="arrow"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      />
      <HoverCircle />
    </StyledHeroLink>
  );
};

export const MainLink = ({ to, color, children }: IProps) => {
  return (
    <StyledMainLink to={to}>
      <Text1Bold color={color}>{children}</Text1Bold>
    </StyledMainLink>
  );
};

export const FooterLink = ({
  to,
  color,
  href,
  target,
  children,
  ...rest
}: IPropsWithHref) => {
  return (
    <>
      {to ? (
        <StyledFooterLink to={to} {...rest}>
          <Text1Bold color={color || 'grey'}>{children}</Text1Bold>
        </StyledFooterLink>
      ) : (
        <ALinkStyled href={href} target={target}>
          <Text1Bold color={color || 'grey'}>{children}</Text1Bold>
        </ALinkStyled>
      )}
    </>
  );
};
