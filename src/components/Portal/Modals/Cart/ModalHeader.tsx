import { IconSvg } from '../../../../ui-kit/Icon/Svg';
import { Heading3 } from '../../../../ui-kit/Typography';
import { StyledModalHeader } from './styles';
import { IModalHeaderProps } from './types';

export const ModalHeader = ({ setIsVisible, cartListLength }: IModalHeaderProps) => {
  const onClick = () => {
    setIsVisible(false);
  };

  return (
    <StyledModalHeader>
      <Heading3 $case="uppercase">{`Cart (${cartListLength} items)`}</Heading3>
      <button type="button" onClick={onClick}>
        <IconSvg
          type="close"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        ></IconSvg>
      </button>
    </StyledModalHeader>
  );
};
