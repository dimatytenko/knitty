import { useEffect, useContext } from 'react';
import { IProduct } from '../../types/api';
import { CartContext } from '../../context/Cart';

export const useCart = ({ data }: { data: IProduct[] }) => {
  const { setCartList } = useContext(CartContext);

  useEffect(() => {
    setCartList(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return;
};
