import { useRef, useEffect } from 'react';
import { StyledModalBurger } from './styles';
import gsap from 'gsap';
import { IProps } from './types';
import ModalBody from './ModalBody';
import { clipPath, items } from './utils';

export const ModalBurger = ({ setIsVisible }: IProps) => {
  const refs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      refs.current,
      {
        clipPath: (idx) => clipPath(0)[idx],
        ease: 'expoScale(0.5,7,power1.in)',
      },
      {
        clipPath: (idx) => clipPath(50)[idx],
        stagger: 0.15,
        duration: 2.5,
      },
    );
  }, []);

  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <button
        type="button"
        style={{ position: 'relative', zIndex: 2 }}
        onClick={onClose}
      >
        CLOSE
      </button>
      <StyledModalBurger>
        {items.map((_, idx) => (
          <ModalBody key={idx} ref={refs} />
        ))}
      </StyledModalBurger>
    </>
  );
};
