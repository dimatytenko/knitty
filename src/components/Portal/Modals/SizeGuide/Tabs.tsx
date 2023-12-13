import { useEffect, useRef, useState } from 'react';
import { StyledLine, StyledTabs, StyledTabsWrapper } from './styles';
import { tabs } from './assets/tabs';
import gsap from 'gsap';

export const Tabs = () => {
  const refs = useRef([]);
  const refLine = useRef(null);

  const [active, setActive] = useState(0);

  useEffect(() => {
    gsap.to(refLine.current, {
      left: gsap.getProperty(refs.current![active], 'offsetLeft'),
      width: gsap.getProperty(refs.current![active], 'width'),
    });
  }, [active]);

  return (
    <StyledTabsWrapper>
      {tabs.map((title, idx) => (
        <StyledTabs
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
