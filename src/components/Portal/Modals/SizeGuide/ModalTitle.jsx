import { Text2Bold } from '../../../../ui-kit/Typography';
import { ButtonClose } from '../Burger/ButtonClose';
import { StyledTitleWrapper } from './styles';

export const ModalTitle = ({ onClose }) => {
  return (
    <StyledTitleWrapper>
      <Text2Bold $case="uppercase">
        SIZE guide and detailed measurements
      </Text2Bold>
      <ButtonClose onClose={onClose} />
    </StyledTitleWrapper>
  );
};
