import { useTranslation } from 'react-i18next';
import { IconSvg } from '../../../../ui-kit/Icon/Svg';
import { Heading3 } from '../../../../ui-kit/Typography';
import { StyledModalHeader } from './styles';
import { IModalHeaderProps } from './types';

export const ModalHeader = ({
  setIsVisible,
  cartListLength,
}: IModalHeaderProps) => {
  const { t } = useTranslation();
  const onClick = () => {
    setIsVisible(false);
  };

  return (
    <StyledModalHeader>
      <Heading3 $case="uppercase">
        {
          // `Cart (${cartListLength} items)`;
          t('common.cart') +
            ' ' +
            `(${cartListLength})` +
            ' ' +
            t('cart.title', { postProcess: 'interval', count: cartListLength })
        }
      </Heading3>
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
