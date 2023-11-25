import { useRef, useEffect, useContext } from 'react';
import { StyledModalCart, StyledModalHeader } from './styles';
import gsap from 'gsap';
import { Heading3 } from '../../../../ui-kit/Typography';
import { IProps } from './types';
import { IconSvg } from '../../../../ui-kit/Icon/Svg';
import { HorizontalSeparator } from '../../../../ui-kit/HorizontalSeparator';
import { CartContext } from '../../../../context/Cart';
import { GalleryComponent } from '../../../Gallery';
import { CartCard } from '../../../../ui-kit/Card/Cart';
import { StyledCartGalleryWrapper } from '../../../../styles/container';

const ModalHeader = ({ setIsVisible }: IProps) => {
  const onClick = () => {
    setIsVisible(false);
  };
  return (
    <StyledModalHeader>
      <Heading3 $case="uppercase">Cart (1 items)</Heading3>
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

export const ModalCart = ({ setIsVisible }: IProps) => {
  const refModal = useRef(null);
  const { cartList } = useContext(CartContext);

  useEffect(() => {
    if (!refModal) return;
    gsap.to(refModal.current, { right: 0 });
  }, []);

  return (
    <StyledModalCart ref={refModal} as="aside">
      <ModalHeader setIsVisible={setIsVisible} />
      <HorizontalSeparator />
      <GalleryComponent
        data={cartList}
        wrapper={StyledCartGalleryWrapper}
        renderItem={(el) => <CartCard {...el} />}
      />
      <HorizontalSeparator />
    </StyledModalCart>
  );
};
