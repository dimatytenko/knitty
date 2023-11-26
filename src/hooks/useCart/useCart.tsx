import { useEffect, useContext } from 'react';
import { IProduct } from '../../types/api';
import { CartContext } from '../../context/Cart';

export const useCart = ({ data }: { data: IProduct[] }) => {
  const { setCartList } = useContext(CartContext);

  useEffect(() => {
    setCartList(data);
  }, [data, setCartList]);
  return;
};
