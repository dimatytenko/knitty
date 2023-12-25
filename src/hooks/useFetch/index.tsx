import { useContext, useEffect, useState } from 'react';
import { IProps } from './types';
import { GlobalStore } from '../../context/GlobalStore';
import store from 'store';

export const useFetch = ({
  fetch,
  globalStateKey = '',
  cache = false,
}: IProps) => {
  const { globalSetter, globalState } = useContext(GlobalStore)!;

  const [data, setData] = useState([]);
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

    if (setCache(cache)) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await fetch();
        if (data) setData(data);

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
  }, []);

  return { error, loading, data, setData, globalSetter, globalState };
};
