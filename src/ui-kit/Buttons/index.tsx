import { HoverCircle } from '../HoverCircle';
import { IconSvg } from '../Icon/Svg';
import { Text2Bold } from '../Typography';
import {
  StyledFilterButton,
  StyledMainButton,
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
      <Text2Bold $case="uppercase" color="primary">
        {title}
      </Text2Bold>
      <HoverCircle />
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
      <Text2Bold $case="uppercase" color={active ? 'background' : 'primary'}>
        {title}
      </Text2Bold>
    </StyledFilterButton>
  );
};

export const ButtonWithArrow = ({
  title,
  onClick = () => {},
  type = 'button',
  children,
}: IProps) => {
  return (
    <StyledButtonWithArrow color="background" type={type} onClick={onClick}>
      <Text2Bold $case="uppercase" color="primary">
        {title}
      </Text2Bold>
      {children}
      <IconSvg
        type="arrow"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="primary"
        stroke="primary"
      />
      <HoverCircle />
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
