import { useEffect, useRef, useState } from 'react';
import {
  StyledLine,
  StyledSizeGuideControls,
  StyledTabs,
  StyledTabsWrapper,
} from './styles';
import gsap from 'gsap';

export const SizeGuideControls = () => {
  const refTab1 = useRef(null);
  const refTab2 = useRef(null);
  const refTab3 = useRef(null);
  const refLine = useRef(null);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const tabs = [refTab1.current, refTab2.current, refTab3.current];

    gsap.to(refLine.current, {
      left: gsap.getProperty(tabs[active], 'offsetLeft'),
      width: gsap.getProperty(tabs[active], 'width'),
    });
  }, [active]);

  return (
    <StyledSizeGuideControls>
      <StyledTabsWrapper>
        <StyledTabs
          ref={refTab1}
          as="button"
          type="button"
          onClick={() => setActive(0)}
        >
          Woman
        </StyledTabs>
        <StyledTabs
          ref={refTab2}
          as="button"
          type="button"
          onClick={() => setActive(1)}
        >
          Man
        </StyledTabs>
        <StyledTabs
          ref={refTab3}
          as="button"
          type="button"
          onClick={() => setActive(2)}
        >
          Kids
        </StyledTabs>
        <StyledLine ref={refLine}></StyledLine>
      </StyledTabsWrapper>
    </StyledSizeGuideControls>
  );
};
