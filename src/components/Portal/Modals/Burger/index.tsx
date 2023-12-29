import { useRef, useEffect, useState } from 'react';
import { StyledModalBurger } from './styles';
import gsap from 'gsap';
import { IProps } from './types';
import { clipPath, items } from './utils';
import Bubbles from './Bubbles';
import { ModalBody } from './ModalBody';

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

  return (
    <>
      <StyledModalBurger>
        {items.map((_, idx) => (
          <Bubbles key={idx} ref={refs} />
        ))}
        <ModalBody setIsVisible={setIsVisible} />
      </StyledModalBurger>
    </>
  );
};
