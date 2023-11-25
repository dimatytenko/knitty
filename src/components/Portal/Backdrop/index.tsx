import { useEffect, useRef } from 'react';
import { IProps } from './types';
import { StyledBackDrop } from './styles';
import gsap from 'gsap';

export const BackDrop = ({ children, setIsVisible }: IProps) => {
  const refModal = useRef(null);

  useEffect(() => {
    if (!refModal) return;
    gsap.to(refModal.current, { opacity: 1 });
  }, []);

  const onClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setIsVisible(false);
  };
  return (
    <StyledBackDrop ref={refModal} onClick={onClick}>
      {children}
    </StyledBackDrop>
  );
};
