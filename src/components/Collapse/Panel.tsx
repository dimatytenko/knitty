import { useEffect, useRef, useState } from 'react';
import {
  StyledLeftBlock,
  StyledPlusMinusCircle,
  StyledText,
  StyledTitle,
} from './styles';
import gsap from 'gsap';
import { IPanelProps } from './types';

export const Panel = ({ label, text }: IPanelProps) => {
  const refTitle = useRef(null);
  const refText = useRef(null);
  const refHor = useRef(null);
  const refVert = useRef(null);

  const [active, setActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (active) {
      gsap.to(refTitle.current, {
        padding: '16px 0px 0px 0px',
      });
      gsap.to(refText.current, {
        padding: '16px 0px',
        height: '100%',
        duration: 0.75,
        ease: 'elastic.out(1,0.34)',
        onStart: () => setIsAnimating(true),
        onComplete: () => setIsAnimating(false),
      });

      gsap.to(refVert.current, { rotate: 0 });
      gsap.to(refHor.current, { rotate: -180 });
      return;
    }
    gsap.to(refTitle.current, { padding: '16px 0px' });
    gsap.to(refText.current, {
      padding: 0,
      height: 0,
      onStart: () => setIsAnimating(true),
      onComplete: () => setIsAnimating(false),
    });
    gsap.to(refVert.current, { rotate: 90 });
    gsap.to(refHor.current, { rotate: 0 });
  }, [active]);

  return (
    <StyledLeftBlock
      onClick={() => (isAnimating ? () => {} : setActive((prev) => !prev))}
    >
      <StyledTitle ref={refTitle}>
        {label}
        <StyledPlusMinusCircle>
          <span ref={refHor}></span>
          <span ref={refVert}></span>
        </StyledPlusMinusCircle>
      </StyledTitle>
      <StyledText ref={refText}>{text}</StyledText>
    </StyledLeftBlock>
  );
};
