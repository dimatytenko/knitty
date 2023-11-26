import store from 'store';
import { useEffect } from 'react';
import { IProps } from './types';

export const useStorageObserver = ({ storageKey, data }: IProps) => {
  useEffect(() => {
    store.set(storageKey, data);
  }, [data, storageKey]);

  return;
};
