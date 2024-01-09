import { MainLink } from '../../../../ui-kit/Links';
import { TextColor } from '../../../../ui-kit/Typography/types';
import { LangSwitcherComponent } from '../../../LangSwitcher';
import { StyledBodyFooter } from './styles';

export const ModalFooter = ({ color }: { color: TextColor }) => {
  return (
    <StyledBodyFooter>
      <LangSwitcherComponent color={color} />
      <div>
        <MainLink to="/sign-up" color={color}>
          Sign Up
        </MainLink>
        <MainLink to="/sign-in" color={color}>
          Sign In
        </MainLink>
      </div>
    </StyledBodyFooter>
  );
};
