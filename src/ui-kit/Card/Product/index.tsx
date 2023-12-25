import { FavouriteButton, MainButton } from '../../Buttons';
import { ImageComponent } from '../../ImageComponent/Index';
import { ImageSkeleton } from '../../Loader/ImageSkeleton';
import { Text2Bold } from '../../Typography';
import {
  StyledImageContent,
  StyledImageLink,
  StyledInfoContent,
  StyledProductCard,
} from './styled';
import { IProps } from './types';

export const ProductCard = ({
  name,
  price,
  id,
  isFavourite,
  isInCart,
  img_preview,
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
          <ImageComponent image={img_preview} title={name} />
        </StyledImageLink>
        <MainButton
          isInCart={isInCart}
          title={isInCart ? 'In cart' : 'Add to cart'}
          onClick={() => handleAddToCart(id)}
        />
      </StyledImageContent>
      <StyledInfoContent>
        <Text2Bold $case="uppercase">{name}</Text2Bold>
        <Text2Bold>€{price}</Text2Bold>
      </StyledInfoContent>
    </StyledProductCard>
  );
};
