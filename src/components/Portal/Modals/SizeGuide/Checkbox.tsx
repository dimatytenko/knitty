import { useEffect, useRef, useState } from 'react';
import { Text2Bold } from '../../../../ui-kit/Typography';
import {
  StyledCheckBoxWrapper,
  StyledCheckboxWrapper,
  StyledCircleFilled,
  StyledCircleStroke,
} from './styles';
import gsap from 'gsap';

export const Checkbox = () => {
  const refFirst = useRef(null);
  const refSecond = useRef(null);
  const refCircle = useRef(null);

  const [radio, setRadio] = useState('sm');

  useEffect(() => {
    const leftFirst: number = gsap.getProperty(refFirst.current, 'offsetLeft');
    const leftSecond: number = gsap.getProperty(
      refSecond.current,
      'offsetLeft',
    );

    gsap.fromTo(
      refCircle.current,
      { scale: 4, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        left: radio === 'sm' ? leftFirst + 3.4 : leftSecond + 3.4,
      },
    );
  }, [radio]);

  return (
    <StyledCheckBoxWrapper>
      <StyledCheckboxWrapper>
        <Text2Bold as="label" htmlFor="sm">
          <StyledCircleStroke ref={refFirst} />
          sm
        </Text2Bold>
        <input
          type="radio"
          id="sm"
          value="sm"
          checked={radio === 'sm'}
          onChange={() => setRadio('sm')}
        />
      </StyledCheckboxWrapper>
      <StyledCheckboxWrapper>
        <Text2Bold as="label" htmlFor="inches">
          <StyledCircleStroke ref={refSecond} />
          inches
        </Text2Bold>
        <input
          type="radio"
          id="inches"
          value="inches"
          checked={radio === 'inches'}
          onChange={() => setRadio('inches')}
        />
      </StyledCheckboxWrapper>
      <StyledCircleFilled ref={refCircle} />
    </StyledCheckBoxWrapper>
  );
};
