import { useEffect, useState } from 'react';
import { IProps } from './types';
import { dataList } from '../../helpers/listsData';
import { IProduct } from '../../types/api';

export const useFetch = ({ endpoint }: IProps) => {
  const [data, setData] = useState<IProduct[] | []>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // if (!data.length) return;
    const fakeFetch = (endpoint: string): Promise<IProduct[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`fetch ${endpoint} endpoint`, endpoint);
          resolve(dataList);
        }, 1500);
      });
    };

    const getData = async () => {
      setLoading(true);
      try {
        const data = await fakeFetch(endpoint); //{endpoint:"baseURL/api/woman"}
        if (data) setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, error, loading, setData };
};
