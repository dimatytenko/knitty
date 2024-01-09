import { useContext } from 'react';
import { FavouriteButton, MainButton } from '../../Buttons';
import { ImageComponent } from '../../ImageComponent/Index';
import { Text2Bold } from '../../Typography';
import {
  StyledImageContent,
  StyledImageLink,
  StyledInfoContent,
  StyledProductCard,
} from './styled';
import { IProps } from './types';
import { GlobalStore } from '../../../context/GlobalStore';
import { isIn } from '../../../helpers/helpers';

export const ProductCard = ({ setData, ...props }: IProps) => {
  const {
    globalState: { favList, cartList },
  } = useContext(GlobalStore)!;

  const isInCart = isIn({ list: cartList, id: props.id });
  const isInFav = isIn({ list: favList, id: props.id });

  const handleAddToCart = (product: any) => {
    setData((prev) => {
      !isInCart
        ? (prev.cartList = [...prev.cartList, { ...product, quantity: 1 }])
        : (prev.cartList = prev.cartList.filter((el) => el.id !== product.id));
      return { ...prev };
    });
  };

  const handleAddToFavourites = (product: any) => {
    setData((prev) => {
      !isInFav
        ? (prev.favList = [...prev.favList, product])
        : (prev.favList = prev.favList.filter((el) => el.id !== product.id));
      return { ...prev };
    });
  };

  return (
    <StyledProductCard as="article">
      <StyledImageContent>
        <FavouriteButton
          isFavourite={isInFav}
          onClick={() => handleAddToFavourites(props)}
        />
        <StyledImageLink to={`/gallery/product/${props.id}`}>
          <ImageComponent
            image={props.img_preview}
            alt={props.name}
            width={'auto'}
            height={420}
          />
        </StyledImageLink>
        <MainButton
          isInCart={isInCart}
          title={isInCart ? 'In cart' : 'Add to cart'}
          onClick={() => handleAddToCart(props)}
        />
      </StyledImageContent>
      <StyledInfoContent>
        <Text2Bold $case="uppercase">{props.name}</Text2Bold>
        <Text2Bold>€{props.price}</Text2Bold>
      </StyledInfoContent>
    </StyledProductCard>
  );
};
