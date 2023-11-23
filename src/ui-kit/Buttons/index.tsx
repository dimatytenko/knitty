import { IconSvg } from '../Icon/Svg';
import { Text2Bold } from '../Typography';
import {
  StyledFilterButton,
  StyledMainButton,
  StyledrButtonWithArrow,
  StyledButtonText,
} from './styles';
import { IFilterButton, IProps } from './types';

export const MainButton = ({
  title,
  onClick = () => {},
  type = 'button',
}: IProps) => {
  return (
    <StyledMainButton type={type} onClick={onClick}>
      <Text2Bold $case="uppercase">{title}</Text2Bold>
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
    <StyledFilterButton $active={active} type={type} onClick={onClick}>
      <StyledButtonText>{title}</StyledButtonText>
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
      <StyledButtonText>{title}</StyledButtonText>
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
