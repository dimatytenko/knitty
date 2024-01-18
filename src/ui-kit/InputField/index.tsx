import { useRef } from 'react';
import { StyledInputField, StyledLabel } from './styles';
import { IProps } from './types';
import gsap from 'gsap';

export const InputField = ({
  inputKey,
  type,
  label,
  value,
  onChange,
}: IProps) => {
  const refLabel = useRef();
  const refInput = useRef();

  return (
    <StyledInputField>
      <StyledLabel as="label" htmlFor={inputKey} color="unfocus" ref={refLabel}>
        {label}
      </StyledLabel>
      <input
        ref={refInput}
        value={value}
        type={type}
        id={inputKey}
        required
        onFocus={() =>
          gsap.to(refLabel.current, {
            y: -15,
            transformOrigin: 'center left',
            scale: 0.7,
          })
        }
        onBlur={() =>
          gsap.to(refLabel.current, {
            y: 0,
            transformOrigin: 'center left',
            scale: 1,
          })
        }
        onChange={({ target: { value } }) => onChange(value)}
      />
    </StyledInputField>
  );
};
