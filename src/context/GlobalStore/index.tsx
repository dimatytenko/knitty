import store from 'store';
import { createContext, useState } from 'react';
import { IProduct } from '../../types/api';
import { IProps } from './types';
import { useFetch } from '../../hooks/useFetch';
import { useStorageObserver } from '../../hooks/useStorageObserver';
import { useCart } from '../../hooks/useCart/useCart';
import { useFavourites } from '../../hooks/useFavourites/useFavourites';

export const GlobalStore = createContext<{
  loading: boolean;
  error: string;
  data: IProduct[];
  cartList: IProduct[];
  favList: IProduct[];
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
} | null>(null);

const useGlobalStore = () => {
  const [data, setData] = useState<IProduct[] | []>(
    store.get('products') || [],
  );

  const { error, loading } = useFetch({
    endpoint: 'baseURL/api/products',
    setData,
    noFetching: data.length > 0,
  });

  const { cartList } = useCart({ data });

  const { favList } = useFavourites({ data });

  useStorageObserver({
    storageKey: 'products',
    data,
  });

  return {
    data,
    setData,
    error,
    loading,
    cartList,
    favList,
  };
};

export const GlobalStroreProvider = ({ children }: IProps) => {
  return (
    <GlobalStore.Provider value={useGlobalStore()}>
      {children}
    </GlobalStore.Provider>
  );
};
