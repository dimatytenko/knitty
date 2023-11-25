import { useRef, useEffect } from 'react';
import { StyledModalCart } from './styles';
import gsap from 'gsap';
import { Heading2 } from '../../../../ui-kit/Typography';
import { IProps } from './types';
import { IconSvg } from '../../../../ui-kit/Icon/Svg';

const ModalHeader = ({ setIsVisible }: IProps) => {
  const onClick = () => {
    setIsVisible(false);
  };
  return (
    <div>
      <Heading2 $case="uppercase">Cart (1 items)</Heading2>
      <button type="button" onClick={onClick}>
        <IconSvg
          type="close"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        ></IconSvg>
      </button>
    </div>
  );
};

export const ModalCart = ({ setIsVisible }: IProps) => {
  const refModal = useRef(null);

  useEffect(() => {
    if (!refModal) return;
    gsap.to(refModal.current, { right: 0 });
  }, []);

  return (
    <StyledModalCart ref={refModal}>
      <ModalHeader setIsVisible={setIsVisible} />
    </StyledModalCart>
  );
};
