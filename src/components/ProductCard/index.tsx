import { FavouriteButton, MainButton } from '../../ui-kit/Buttons';
import { Text2Bold } from '../../ui-kit/Typography';
import {
  StyledImageContent,
  StyledImageWrapper,
  StyledInfoContent,
  StyledProductCard,
} from './styled';
import { IProps } from './types';

export const ProductCard = ({
  title,
  price,
  id,
  isFavourite,
  isInCart,
  setData,
}: IProps) => {
  const handleAddToCart = (id: string) => {
    setData((prev) =>
      prev.map((product) => {
        return product.id === id
          ? { ...product, isInCart: !product.isInCart }
          : product;
      }),
    );
  };

  const handleAddToFavourites = (id: string) => {
    setData((prev) =>
      prev.map((product) => {
        return product.id === id
          ? { ...product, isFavourite: !product.isFavourite }
          : product;
      }),
    );
  };
  return (
    <StyledProductCard as="li">
      <StyledImageContent>
        <FavouriteButton
          isFavourite={isFavourite}
          onClick={() => handleAddToFavourites(id)}
        />
        <StyledImageWrapper></StyledImageWrapper>
        <MainButton
          isInCart={isInCart}
          title={isInCart ? 'In cart' : 'Add to cart'}
          onClick={() => handleAddToCart(id)}
        />
      </StyledImageContent>
      <StyledInfoContent>
        <Text2Bold $case="uppercase">{title}</Text2Bold>
        <Text2Bold>€{price}</Text2Bold>
      </StyledInfoContent>
    </StyledProductCard>
  );
};
