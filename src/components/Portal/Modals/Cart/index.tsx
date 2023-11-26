import { useRef, useEffect, useContext } from 'react';
import { StyledModalCart } from './styles';
import gsap from 'gsap';
import { IProps } from './types';
import { HorizontalSeparator } from '../../../../ui-kit/HorizontalSeparator';
import { CartContext } from '../../../../context/Cart';
import { GalleryComponent } from '../../../Gallery';
import { CartCard } from '../../../../ui-kit/Card/Cart';
import { StyledCartGalleryWrapper } from '../../../../styles/container';
import { ModalHeader } from './ModalHeader';

export const ModalCart = ({ setIsVisible }: IProps) => {
  const refModal = useRef(null);
  const { cartList } = useContext(CartContext)!;

  useEffect(() => {
    if (!refModal) return;
    gsap.to(refModal.current, { right: 0 });
  }, []);

  return (
    <StyledModalCart ref={refModal}>
      <ModalHeader setIsVisible={setIsVisible} cartList={cartList} />
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
