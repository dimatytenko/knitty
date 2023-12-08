import { FavouriteButton, MainButton } from '../../Buttons';
import { Text2Bold } from '../../Typography';
import {
  StyledImageContent,
  StyledImageLink,
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
  image,
  setData,
}: IProps) => {
  const handleAddToCart = (id: string) => {
    setData((prev) =>
      prev.map((product) => {
        return product.id === id
          ? {
              ...product,
              isInCart: !product.isInCart,
              quantity: 1,
            }
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
    <StyledProductCard as="article">
      <StyledImageContent>
        <FavouriteButton
          isFavourite={isFavourite}
          onClick={() => handleAddToFavourites(id)}
        />
        <StyledImageLink to={`/gallery/product/${id}`}>
          <img src={image} alt={title} />
        </StyledImageLink>
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
