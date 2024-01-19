import { useEffect, useRef } from 'react';
import { StyledForm } from './styles';
import { IProps } from './types';
import gsap from 'gsap';

export const Form = ({ children }: IProps) => {
  const refForm = useRef();
  useEffect(() => {
    gsap.fromTo(
      refForm.current.children,
      { opacity: 0, x:-30 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
      },
    );
  }, []);
  return <StyledForm ref={refForm}>{children}</StyledForm>;
};
