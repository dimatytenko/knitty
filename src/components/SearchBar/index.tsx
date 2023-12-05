import { useRef, useState, useEffect } from 'react';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { StyledInputField, StyledSearchBar } from './styles';
import { TextBody1Bold } from '../../ui-kit/Typography/styles';
import { GSAPWrapper } from '../../ui-kit/GSAPWrapper';
import { gsap } from 'gsap';
import { useTheme } from 'styled-components';
import { TextColor } from '../../ui-kit/Typography/types';

interface IProps {
  color: TextColor;
}

export const SearchBarComponent: React.FC<IProps> = ({ color }) => {
  const { palette } = useTheme();
  const refText = useRef(null);
  const refInput = useRef(null);
  const refIcon = useRef(null);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (!value) return;

    gsap.to(refInput.current, { borderColor: palette.colors.primary });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      gsap.to(refInput.current, {
        left: -gsap.getProperty(refText.current, 'offsetWidth'),
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
      borderBottom: `1px solid ${palette.colors.primary}`,
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
        <TextBody1Bold color={color}>Search</TextBody1Bold>
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
