import { useEffect, useRef, useState } from 'react';
import {
  StyledLeftBlock,
  StyledRightBlock,
  StyledText,
  StyledTitle,
  Wrapper,
} from './styles';
import gsap from 'gsap';
import { IPanelProps } from './types';

export const Panel = ({ label, text }: IPanelProps) => {
  const refText = useRef(null);
  const refHor = useRef(null);
  const refVert = useRef(null);

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      gsap.to(refText.current, {
        padding: '20px 0',
        height: '100%',
        duration: 1.25,
        ease: 'elastic.out(1,0.3)',
      });

      gsap.to(refVert.current, { rotate: 0 });
      gsap.to(refHor.current, { rotate: -180 });
      return;
    }
    gsap.to(refText.current, {
      padding: 0,
      height: 0,
    });
    gsap.to(refVert.current, { rotate: 90 });
    gsap.to(refHor.current, { rotate: 0 });
  }, [active]);

  return (
    <Wrapper>
      <StyledLeftBlock onClick={() => setActive((prev) => !prev)}>
        <StyledTitle>{label}</StyledTitle>
        <StyledText ref={refText}>{text}</StyledText>
      </StyledLeftBlock>
      <StyledRightBlock>
        <div>
          <span ref={refHor}></span>
          <span ref={refVert}></span>
        </div>
      </StyledRightBlock>
    </Wrapper>
  );
};
