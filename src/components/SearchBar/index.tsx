import { useRef, useState, useEffect } from 'react';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { StyledInputField, StyledSearchBar } from './styles';
import { TextBody1Bold } from '../../ui-kit/Typography/styles';
import { GSAPWrapper } from '../../ui-kit/GSAPWrapper';
import { gsap } from 'gsap';

export const SearchBarComponent = () => {
  const refText = useRef(null);
  const refInput = useRef(null);
  const refIcon = useRef(null);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (!value) return;

    gsap.to(refInput.current, { borderColor: 'black' });
    gsap.to(refIcon.current, { fill: 'black' });
  }, [value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      gsap.to(refInput.current, {
        left: -gsap.getProperty(refText.current, 'offsetWidth'),
        borderBottom: '1px solid red',
      });
      gsap.to(refIcon.current, {
        fill: 'red',
      });
    }

    setValue(e.target.value);
  };

  const onFocus = () => {
    if (value) {
      return;
    }
    gsap.to(refText.current, {
      left: -gsap.getProperty(refText.current, 'offsetWidth'),
    });
    gsap.to(refInput.current, {
      left: -gsap.getProperty(refText.current, 'offsetWidth'),
      borderBottom: '1px solid red',
    });
    gsap.to(refIcon.current, {
      fill: 'red',
    });
  };

  const onBlur = () => {
    if (value) {
      return;
    }
    gsap.to(refText.current, { left: 0 });
    gsap.to(refInput.current, { left: 0, borderColor: 'transparent' });
    gsap.to(refIcon.current, { fill: 'black' });
  };

  return (
    <StyledSearchBar>
      <GSAPWrapper ref={refText}>
        <TextBody1Bold>Search</TextBody1Bold>
      </GSAPWrapper>
      <GSAPWrapper ref={refInput}>
        <StyledInputField>
          <label htmlFor="search">
            {''}
            <GSAPWrapper ref={refIcon}>
              <IconSvg type="search" stroke="none" />
            </GSAPWrapper>
          </label>
          <input
            type="text"
            id="search"
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
          />
        </StyledInputField>
      </GSAPWrapper>
    </StyledSearchBar>
  );
};
