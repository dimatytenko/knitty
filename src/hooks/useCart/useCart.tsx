import { useEffect, useState } from 'react';
import { IProduct } from '../../types/api';

export const useCart = ({ data }: { data: IProduct[] }) => {
  const [cartList, setCartList] = useState<IProduct[]>([]);

  useEffect(() => {
    setCartList(data.filter(({ isInCart }) => isInCart));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // console.log(cartList);
  return { cartList, setCartList };
};
