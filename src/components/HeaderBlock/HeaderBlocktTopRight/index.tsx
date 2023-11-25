import { IconSvg } from '../../../ui-kit/Icon/Svg';
import { MainLink } from '../../../ui-kit/Links';
import { VerticalSeparator } from '../../../ui-kit/VerticalSeparator';
import { LangSwitcherComponent } from '../../LangSwitcher';

export const HeaderBlockTopRight = () => {
  return (
    <>
      <MainLink to="/favorites">
        <IconSvg type="heart" fill="none" />
      </MainLink>

      <VerticalSeparator>
        <LangSwitcherComponent />
      </VerticalSeparator>
      <VerticalSeparator>
        <MainLink to="/sign-up">Sign Up</MainLink>
      </VerticalSeparator>
      <VerticalSeparator>
        <MainLink to="/sign-in">Sign In</MainLink>
      </VerticalSeparator>
    </>
  );
};
