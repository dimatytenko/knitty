import { useState } from 'react';
import { Text2Bold, Span } from '../../../ui-kit/Typography';
import { listRight } from '../../Layout/constants';
import { Portal } from '../../Portal';
import { NavList } from '../NavList';
import { ModalCart } from '../../Portal/Modals/Cart';
import { StyledCartBtn, StyledFavLink } from '../styles';
import { IProps } from './types';

export const HeaderBlockBottomRight = ({
  favList,
  cartList,
  setData,
  color,
}: IProps) => {
  const [visible, setIsVisible] = useState<boolean>(false);

  const onClick = () => {
    setIsVisible(true);
  };

  return (
    <>
      <NavList list={listRight} color={color} />
      <StyledFavLink to="/favorites">
        <Text2Bold $case="uppercase" color={color}>
          Favorits
        </Text2Bold>
        {!favList.length ? null : <Span color={color}>{favList.length}</Span>}
      </StyledFavLink>

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
