import { useEffect, useRef } from 'react';
import { StyledMainLoader, StyledWrapper } from './styles';
import gsap from 'gsap';

export const MainLoader = () => {
  const refLoader = useRef(null);
  const refContainer = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      refLoader.current,
      { x: 0 },
      {
        x: () => {
          const containerWidth = gsap.getProperty(
            refContainer.current,
            'width',
          );
          const containerPadding = gsap.getProperty(
            refContainer.current,
            'padding',
          );
          const item = gsap.getProperty(refLoader.current, 'width');
          const x = containerWidth - item - containerPadding;
          return x;
        },

        duration: 2.5,
        repeat: -1,
        yoyo: true
      },
    );
  }, []);

  return (
    <StyledWrapper ref={refContainer}>
      <StyledMainLoader ref={refLoader} />
    </StyledWrapper>
  );
};
