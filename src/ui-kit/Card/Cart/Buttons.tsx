import gsap from 'gsap';
import { IconSvg } from '../../Icon/Svg';
import { Text2Bold } from '../../Typography';
import { StyledButtonsWrapper, StyledIncrementButtons } from './styles';
import { TypeButtonsProps } from './types';

export const Buttons = ({
  quantity,
  id,
  setData,
  refCard,
}: TypeButtonsProps) => {
  const handleDecrement = (id: string | number) => {
    setData((prev) => {
      prev.cartList = prev.cartList.map((product) => {
        if (product.id === id) {
          if (product.quantity && !(product.quantity <= 1))
            return { ...product, quantity: (product.quantity -= 1) };
        }
        return product;
      });
      return { ...prev };
    });
  };

  const handleIncrement = (id: string | number) => {
    setData((prev) => {
      prev.cartList = prev.cartList.map((product) => {
        if (product.id === id) {
          if (product.quantity)
            return { ...product, quantity: (product.quantity += 1) };
        }
        return product;
      });
      return { ...prev };
    });
  };

  const handleRemove = (id: string | number) => {
    gsap.to(refCard.current, {
      opacity: 0,
      left: '-100%',
      onComplete: () => {
        setData((prev) => {
          prev.cartList = prev.cartList.filter((el) => el.id !== id);
          return { ...prev };
        });
      },
    });
  };

  return (
    <StyledButtonsWrapper>
      <StyledIncrementButtons>
        <button type="button" onClick={() => handleDecrement(id)}>
          <IconSvg type="minus" width="16" height="16" viewBox="0 0 16 16" />
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={() => handleIncrement(id)}>
          <IconSvg type="plus" width="16" height="16" viewBox="0 0 16 16" />
        </button>
      </StyledIncrementButtons>
      <button type="button" onClick={() => handleRemove(id)}>
        <Text2Bold $case="uppercase" $decor="underline">
          Remove
        </Text2Bold>
      </button>
    </StyledButtonsWrapper>
  );
};
