import { MainLink } from '../../../ui-kit/Links';
import { VerticalSeparator } from '../../../ui-kit/VerticalSeparator';
import { LangSwitcherComponent } from '../../LangSwitcher';
import { TextColor } from '../../../ui-kit/Typography/types';

interface IProps {
  color: TextColor;
}

export const HeaderBlockTopRight: React.FC<IProps> = ({ color }) => {
  return (
    <>
      <VerticalSeparator color={color}>
        <LangSwitcherComponent color={color} />
      </VerticalSeparator>
      <VerticalSeparator color={color}>
        <MainLink to="/sign-up" color={color}>
          Sign Up
        </MainLink>
      </VerticalSeparator>
      <VerticalSeparator color={color}>
        <MainLink to="/sign-in" color={color}>
          Sign In
        </MainLink>
      </VerticalSeparator>
    </>
  );
};
