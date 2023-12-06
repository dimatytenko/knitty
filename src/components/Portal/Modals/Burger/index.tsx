import { useRef, useEffect, forwardRef } from 'react';
import { StyledModalBurger } from './styles';
import styled from 'styled-components';
import gsap from 'gsap';
import { IProps } from './types';

const StyledBodyWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`;

const ModalBody = forwardRef((_, ref) => {
  return (
    <StyledBodyWrapper ref={(el) => ref.current.push(el)}>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'red' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'green' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'blue' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'yellow' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'red' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'green' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'blue' }}
      ></div>
      <div
        style={{ height: '100px', width: '100%', backgroundColor: 'yellow' }}
      ></div>
    </StyledBodyWrapper>
  );
});

ModalBody.displayName = 'ModalBody';

export const ModalBurger = ({ setIsVisible }: IProps) => {
  const refs = useRef([]);
  const items = new Array(5).fill(1);
  const random = (limit = 100) => {
    return Math.random() * limit;
  };

  useEffect(() => {
    gsap.fromTo(
      refs.current,
      {
        clipPath: () => `circle(0% at ${random()}% ${random()}%)`,
        ease: 'expo.in',
      },
      {
        clipPath: () => `circle(100% at ${random()}% ${random()}%)`,
        stagger: 0.2,
        duration: 3,
        // delay: 3,
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
