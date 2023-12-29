import { useContext, useEffect, useState } from 'react';
import { IProps } from './types';
import { GlobalStore } from '../../context/GlobalStore';
import store from 'store';

export const useFetch = ({
  fetch,
  globalStateKey = '',
  cache = false,
  noFetching = false,
}: IProps) => {
  const { globalSetter, globalState } = useContext(GlobalStore)!;

  const [data, setData] = useState<any[] | []>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const setCache = (cache: boolean) => {
    if (cache) {
      const cacheData = store.get(globalStateKey);
      if (cacheData) {
        globalSetter((prev) => ({ ...prev, [globalStateKey]: cacheData }));
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (noFetching) return;

    if (setCache(cache)) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await fetch();
        setData(data);

        if (globalStateKey) {
          globalSetter((prev) => ({ ...prev, [globalStateKey]: data }));
        }

        if (cache) {
          store.set(globalStateKey, data);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetch, noFetching]);

  return { error, loading, data, setData, globalSetter, globalState };
};
