import { route } from '../../../../constants/routes';
import { MainLink } from '../../../../ui-kit/Links';
import { LangSwitcherComponent } from '../../../LangSwitcher';
import { StyledBodyFooter } from './styles';
import { IModalFooter } from './types';

export const ModalFooter = ({ color, closeModal }: IModalFooter) => {
  return (
    <StyledBodyFooter>
      <LangSwitcherComponent color={color} />
      <div>
        <MainLink to={route.signUp.path} color={color} onClick={closeModal}>
          Sign Up
        </MainLink>
        <MainLink to={route.signIn.path} color={color} onClick={closeModal}>
          Sign In
        </MainLink>
      </div>
    </StyledBodyFooter>
  );
};
