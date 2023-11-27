import { useEffect, useState } from 'react';
import { IProduct } from '../../types/api';

export const useCart = ({ data }: { data: IProduct[] }) => {
  const [cartList, setCartList] = useState<IProduct[]>([]);

  useEffect(() => {
    setCartList((prev: IProduct[]) => {
      const set = new Set();
      prev.forEach((el) => {
        set.add(JSON.stringify(el));
      });

      data
        .filter(({ isInCart }) => isInCart)
        .forEach((el) => {
          set.add(JSON.stringify(el));
        });

      const normalizeList: IProduct[] = [...set].map(JSON.parse);
      return [...normalizeList];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return { cartList, setCartList };
};
