import { createContext, useState } from 'react';
import { IProps } from './types';
import { IProduct } from '../../types/api';

export const CartContext = createContext<{
  cartList: IProduct[];
  setCartList: React.Dispatch<React.SetStateAction<IProduct[]>>;
} | null>(null);

export const useCartContext = () => {
  const [cartList, setter] = useState<IProduct[] | []>([]);

  const setCartList = (data: IProduct[]) => {
    setter((prev: IProduct[]) => {
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
  };

  return {
    cartList,
    setCartList,
  };
};

export const CartProvider = ({ children }: IProps) => {
  return (
    <CartContext.Provider value={useCartContext()}>
      {children}
    </CartContext.Provider>
  );
};
