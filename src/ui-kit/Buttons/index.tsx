import { IconSvg } from '../Icon/Svg';
import {
  StyledFilterButton,
  StyledMainButton,
  StyledButtonText,
  StyledButtonWithArrow,
  StyledFavoriteButton,
} from './styles';
import { IFilterButton, IProps, IPropsFavorites } from './types';

export const MainButton = ({
  title,
  onClick = () => {},
  type = 'button',
  isInCart,
}: IProps) => {
  return (
    <StyledMainButton $isincart={isInCart} type={type} onClick={onClick}>
      <StyledButtonText>{title}</StyledButtonText>
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
    <StyledButtonWithArrow type={type} onClick={onClick}>
      <StyledButtonText>{title}</StyledButtonText>
      <IconSvg
        type="arrow"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="back"
        stroke="back"
      />
    </StyledButtonWithArrow>
  );
};

export const FavouriteButton = ({ onClick, isFavourite }: IPropsFavorites) => {
  return (
    <StyledFavoriteButton type="button" onClick={onClick}>
      <IconSvg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        type="heart"
        fill={isFavourite ? 'alert' : 'none'}
      />
    </StyledFavoriteButton>
  );
};
