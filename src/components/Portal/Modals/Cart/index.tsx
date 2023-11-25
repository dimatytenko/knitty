import { useRef, useEffect } from 'react';
import { StyledModalCart } from './styles';
import gsap from 'gsap';

export const ModalCart = () => {
  const refModal = useRef(null);

  useEffect(() => {
    if (!refModal) return;
    gsap.to(refModal.current, { right: 0 });
  }, []);

  return <StyledModalCart ref={refModal}>MODAL CART</StyledModalCart>;
};
