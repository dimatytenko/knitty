import { createContext, useState } from 'react';
import { GlobalStateType, IProps } from './types';

export const GlobalStore = createContext<{
  globalState: any;
  globalSetter: React.Dispatch<React.SetStateAction<any>>;
} | null>(null);

const useGlobalStore = () => {
  const [globalState, globalSetter] = useState<GlobalStateType>({
    categories: [],
    filters: [],
    cartList: [],
    favList: [],
    globalFilters: {
      filter: 0,
      page: 1,
      pageSize: 8,
    },
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
