import { IconSvg } from '../../../../ui-kit/Icon/Svg';
import { ButtonWrapper, StyledButtonClose } from './styles';
import { IButton } from './types';

export const ButtonClose = ({ onClose }: IButton) => {
  return (
    <ButtonWrapper>
      <StyledButtonClose type="button" onClick={onClose}>
        <IconSvg type="close" width="24" height="24" viewBox="0 0 24 24" />
      </StyledButtonClose>
    </ButtonWrapper>
  );
};
