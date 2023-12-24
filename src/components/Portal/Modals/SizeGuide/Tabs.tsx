import { useContext, useEffect, useRef, useState } from 'react';
import { StyledLine, StyledTabs, StyledTabsWrapper } from './styles';
import { tabs } from './assets/tabs';
import gsap from 'gsap';
import { SizeGuideContext } from './context/context';

export const Tabs = () => {
  const { active, setActive } = useContext(SizeGuideContext)!;
  const refs = useRef([]);
  const refLine = useRef(null);


  useEffect(() => {
    gsap.to(refLine.current, {
      left: gsap.getProperty(refs.current![active], 'offsetLeft'),
      width: gsap.getProperty(refs.current![active], 'width'),
    });
  }, [active]);

  return (
    <StyledTabsWrapper>
      {Object.keys(tabs).map((title, idx) => (
        <StyledTabs
          $case="capitalize"
          key={title}
          ref={(el) => refs.current.push(el)}
          as="button"
          type="button"
          onClick={() => setActive(idx)}
        >
          {title}
        </StyledTabs>
      ))}
      <StyledLine ref={refLine}></StyledLine>
    </StyledTabsWrapper>
  );
};
