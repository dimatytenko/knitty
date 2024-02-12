import { useRef, useEffect, useMemo } from 'react';
import { StyledModalCart, StyledTextBlock } from './styles';
import gsap from 'gsap';
import { IProps } from './types';
import { HorizontalSeparator } from '../../../../ui-kit/HorizontalSeparator';
import { GalleryComponent } from '../../../Gallery';
import { CartCard } from '../../../../ui-kit/Card/Cart';
import { StyledCartGalleryWrapper } from '../../../../styles/container';
import { ModalHeader } from './ModalHeader';
import { ButtonWithArrow } from '../../../../ui-kit/Buttons';
import { Text2Bold } from '../../../../ui-kit/Typography';
import { useTranslation } from 'react-i18next';

export const ModalCart = ({ cartList, setIsVisible, setData }: IProps) => {
  const { t } = useTranslation();
  const refModal = useRef(null);

  useEffect(() => {
    if (!refModal) return;
    gsap.to(refModal.current, { right: 0 });
  }, []);

  const summ = useMemo(() => {
    return cartList.reduce(
      (acc, { quantity, price }) => (acc += price * quantity!),
      0,
    );
  }, [cartList]);

  return (
    <StyledModalCart ref={refModal}>
      <ModalHeader
        setIsVisible={setIsVisible}
        cartListLength={cartList.length}
      />
      <HorizontalSeparator />
      <GalleryComponent
        data={cartList}
        wrapper={StyledCartGalleryWrapper}
        renderItem={(el) => <CartCard {...el} setData={setData} />}
      />
      <HorizontalSeparator />

      <StyledTextBlock>
        <Text2Bold $case="uppercase">{t('cart.ADD ORDER NOTE')}</Text2Bold>
        <Text2Bold $case="uppercase" color="unfocus">
          {t('cart.SHIPPING CALCULATED AT CHECKOUT')}
        </Text2Bold>
      </StyledTextBlock>

      <ButtonWithArrow
        title={t('cart.checkout')}
        onClick={() => {
          console.log('checkout');
        }}
      >
        {<Text2Bold $case="uppercase">€{summ}</Text2Bold>}
      </ButtonWithArrow>
    </StyledModalCart>
  );
};
