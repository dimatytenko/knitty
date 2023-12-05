import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { StyledScrollButton } from './styles';
import gsap from 'gsap';
import { ArrowIcon } from '../Sort/styles';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

export const ScrollButton = () => {
  const refButton = useRef(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setScroll(true) : setScroll(false);
    });
  }, []);

  useEffect(() => {
    if (scroll) {
      gsap.fromTo(
        refButton.current,
        {
          opacity: 0,
          scale: 3,
        },
        { opacity: 1, scale: 1, ease: 'bounce.out' },
      );
    } else {
      gsap.to(refButton.current, {
        opacity: 0,
        scale: 1,
      });
    }
  }, [scroll]);

  const onClick = () => {
    gsap.to(window, {
      duration: 2,
      ease: 'circ.out',
      scrollTo: 0,
    });
  };

  const onMouseEnter = () => {
    gsap.to(refButton.current, { scale: 1.5, ease: 'bounce.out' });
  };

  const onMouseLeave = () => {
    gsap.to(refButton.current, { scale: 1, ease: 'bounce.out' });
  };

  return (
    <StyledScrollButton
      ref={refButton}
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ArrowIcon />
    </StyledScrollButton>
  );
};
