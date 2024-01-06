import { ButtonWithArrow } from '../../ui-kit/Buttons';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { Text2Bold } from '../../ui-kit/Typography';
import { StyledButtonClose } from '../Portal/Modals/Burger/styles';
import { StyledModalTitle, StyledSearchModal } from './styles';
import { IProps } from './types';


export const SearchModal = ({ value, onClose }: IProps) => {

  return (
    <StyledSearchModal >
      <StyledModalTitle>
        <Text2Bold $case="uppercase">Products</Text2Bold>
        <StyledButtonClose type="button" onClick={onClose}>
          <IconSvg type="close" width="24" height="24" viewBox="0 0 24 24" />
        </StyledButtonClose>
      </StyledModalTitle>
      <ButtonWithArrow title="see all knits" onClick={() => {}} />
    </StyledSearchModal>
  );
};
