import { IconSvg } from '../Icon/Svg';
import { TextBody2Bold } from '../Typography/styles';
import {
  StyledFilterButton,
  StyledMainButton,
  StyledrButtonWithArrow,
} from './styles';
import { IFilterButton, IProps } from './types';

export const MainButton = ({
  title,
  onClick = () => {},
  type = 'button',
}: IProps) => {
  return (
    <StyledMainButton type={type} onClick={onClick}>
      <TextBody2Bold>{title}</TextBody2Bold>
    </StyledMainButton>
  );
};

export const FilterButton = ({
  title,
  onClick = () => {},
  type = 'button',
  active = false,
}: IFilterButton) => {
  return (
    <StyledFilterButton active={active} type={type} onClick={onClick}>
      <TextBody2Bold>{title}</TextBody2Bold>
    </StyledFilterButton>
  );
};

export const ButtonWithArrow = ({
  title,
  onClick = () => {},
  type = 'button',
}: IProps) => {
  return (
    <StyledrButtonWithArrow type={type} onClick={onClick}>
      <TextBody2Bold>{title}</TextBody2Bold>
      <IconSvg
        type="arrow"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="secondary"
      />
    </StyledrButtonWithArrow>
  );
};
