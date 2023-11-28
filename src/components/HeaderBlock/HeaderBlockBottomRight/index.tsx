import { useState } from 'react';
import { Text2Bold } from '../../../ui-kit/Typography';
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
}: IProps) => {
  const [visible, setIsVisible] = useState<boolean>(false);

  const onClick = () => {
    setIsVisible(true);
  };

  return (
    <>
      <NavList list={listRight} />
      <StyledFavLink to="/favorites">
        <Text2Bold $case="uppercase">Favorits</Text2Bold>
        {!favList.length ? null : <span>{favList.length}</span>}
      </StyledFavLink>

      <StyledCartBtn type="button" onClick={onClick}>
        <Text2Bold $case="uppercase">cart</Text2Bold>
        {!cartList.length ? null : <span>{cartList.length}</span>}
      </StyledCartBtn>
      <Portal visible={visible} setIsVisible={setIsVisible}>
        <ModalCart cartList={cartList} setData={setData} />
      </Portal>
    </>
  );
};
