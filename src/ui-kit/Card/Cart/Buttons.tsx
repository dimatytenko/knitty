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
  const habdleDecrement = (id: string | number) => {
    setData((prev) =>
      prev.map((product) => {
        if (product.id === id) {
          if (product.quantity && !(product.quantity <= 1))
            return { ...product, quantity: (product.quantity -= 1) };
        }
        return product;
      }),
    );
  };

  const habdleIncrement = (id: string | number) => {
    setData((prev) =>
      prev.map((product) => {
        if (product.id === id) {
          if (product.quantity)
            return { ...product, quantity: (product.quantity += 1) };
        }
        return product;
      }),
    );
  };

  const handleRemove = (id: string | number) => {
    gsap.to(refCard.current, {
      opacity: 0,
      left: '-100%',
      onComplete: () => {
        setData((prev) =>
          prev.map((product) => {
            if (product.id === id) {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { quantity, ...rest } = product;
              return { ...rest, isInCart: false };
            }
            return product;
          }),
        );
      },
    });
  };

  return (
    <StyledButtonsWrapper>
      <StyledIncrementButtons>
        <button type="button" onClick={() => habdleDecrement(id)}>
          <IconSvg type="minus" width="16" height="16" viewBox="0 0 16 16" />
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={() => habdleIncrement(id)}>
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
