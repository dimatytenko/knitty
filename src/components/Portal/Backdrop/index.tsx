import {
  useEffect,
  useRef,
  isValidElement,
  cloneElement,
  Children,
} from 'react';
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

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { setIsVisible });
    }
    return child;
  });

  return (
    <StyledBackDrop ref={refModal} onClick={onClick}>
      {childrenWithProps}
    </StyledBackDrop>
  );
};
