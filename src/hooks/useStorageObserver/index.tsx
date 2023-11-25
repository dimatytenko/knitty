import store from 'store';
import { useEffect } from 'react';
import { IProps } from './types';

export const useStorageObserver = ({ storageKey, data, setData }: IProps) => {
  useEffect(() => {
    const localStorageData = store.get(storageKey);
    if (localStorageData) {
      setData(localStorageData);
    }
  }, [setData, storageKey]);

  useEffect(() => {
    store.set(storageKey, data);
  }, [data, storageKey]);

  return;
};
