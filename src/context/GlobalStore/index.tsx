import { createContext, useState } from 'react';
import { GlobalStateType, IProps } from './types';
import { useStorageObserver } from '../../hooks/useStorageObserver';
import store from 'store';

export const GlobalStore = createContext<{
  globalState: any;
  globalSetter: React.Dispatch<React.SetStateAction<any>>;
} | null>(null);

const useGlobalStore = () => {
  const [globalState, globalSetter] = useState<GlobalStateType>({
    categories: [],
    filters: [],
    cartList: store.get('cart-list') || [],
    favList: store.get('fav-list') || [],
    globalFilters: {
      filter: 0,
      page: 1,
      pageSize: 8,
      ordering: null,
    },
  });

  useStorageObserver({
    data: globalState.cartList,
    storageKey: 'cart-list',
  });
  useStorageObserver({
    data: globalState.favList,
    storageKey: 'fav-list',
  });

  return {
    globalState,
    globalSetter,
  };
};

export const GlobalStroreProvider = ({ children }: IProps) => {
  return (
    <GlobalStore.Provider value={useGlobalStore()}>
      {children}
    </GlobalStore.Provider>
  );
};
