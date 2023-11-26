import { useEffect, useState } from 'react';
import { IProps } from './types';
import { dataList } from '../../helpers/listsData';
import { IProduct } from '../../types/api';

export const useFetch = ({ endpoint, setData, noFetching }: IProps) => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (noFetching) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fakeFetch = (endpoint: string): Promise<IProduct[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(dataList);
        }, 1500);
      });
    };

    const getData = async () => {
      setLoading(true);
      try {
        const data = await fakeFetch(endpoint);
        if (data) setData((prev) => [...prev, ...data]);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [endpoint, setData, noFetching]);
  return { error, loading };
};
