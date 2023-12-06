import { useContext, useState } from 'react';
import { HoverCircle } from '../HoverCircle';
import { IconSvg } from '../Icon/Svg';
import { Span, Text2Bold } from '../Typography';
import {
  StyledFilterButton,
  StyledMainButton,
  StyledButtonWithArrow,
  StyledFavoriteButton,
  StyledCartBtn,
  StyledBurgerButton,
} from './styles';
import {
  IFilterButton,
  IProps,
  IPropsCartButton,
  IPropsFavorites,
} from './types';
import { Portal } from '../../components/Portal';
import { ModalCart } from '../../components/Portal/Modals/Cart';
import { GlobalStore } from '../../context/GlobalStore';
import { ModalBurger } from '../../components/Portal/Modals/Burger';

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

export const CartButton = ({ color = 'primary' }: IPropsCartButton) => {
  const [visible, setIsVisible] = useState<boolean>(false);
  const { cartList, setData } = useContext(GlobalStore)!;

  const onClick = () => {
    setIsVisible(true);
  };
  return (
    <>
      <StyledCartBtn type="button" onClick={onClick}>
        <Text2Bold $case="uppercase" color={color}>
          cart
        </Text2Bold>
        {!cartList.length ? null : <Span color={color}>{cartList.length}</Span>}
      </StyledCartBtn>
      <Portal visible={visible} setIsVisible={setIsVisible}>
        <ModalCart cartList={cartList} setData={setData} />
      </Portal>
    </>
  );
};

export const BurgerButton = () => {
  const [visible, setIsVisible] = useState<boolean>(false);

  const onClick = () => {
    setIsVisible(true);
  };

  return (
    <>
      <StyledBurgerButton onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
      </StyledBurgerButton>
      <Portal visible={visible} setIsVisible={setIsVisible}>
        <ModalBurger />
      </Portal>
    </>
  );
};
