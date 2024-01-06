import { useContext } from 'react';
import { GlobalStore } from '../../context/GlobalStore';
import { MainButton } from '../../ui-kit/Buttons';
import { Size } from '../Size';
import { StyledInfoControls } from './styles';
import { isIn } from '../../helpers/helpers';

export const InfoControls = ({ data }: { data: any }) => {
  const {
    globalState: { cartList },
    globalSetter,
  } = useContext(GlobalStore)!;


  const isInCart = isIn({ list: cartList, id: data?.id });

  const onClick = (product: any) => {
    globalSetter((prev) => {
      !isInCart
        ? prev.cartList.push({ ...product, quantity: 1 })
        : (prev.cartList = prev.cartList.filter((el) => el.id !== product.id));
      return { ...prev };
    });
  };

  return (
    <StyledInfoControls>
      <Size />
      <MainButton
        isInCart={isInCart}
        title={isInCart ? 'In cart' : 'Add to cart'}
        onClick={() => onClick(data)}
      />
    </StyledInfoControls>
  );
};
