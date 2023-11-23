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
  handleAddToCart,
  handleAddToFavourites,
}: IProps) => {
  return (
    <StyledProductCard>
      <StyledImageContent>
        <FavouriteButton onClick={() => handleAddToFavourites(id)} />
        <StyledImageWrapper></StyledImageWrapper>
        <MainButton title="Add to cart" onClick={() => handleAddToCart(id)} />
      </StyledImageContent>
      <StyledInfoContent>
        <Text2Bold>{title}</Text2Bold>
        <Text2Bold>€{price}</Text2Bold>
      </StyledInfoContent>
    </StyledProductCard>
  );
};
