import { useEffect, useState } from 'react';
import { IProps } from './types';
import { fakeFetchAllProducts, fakeFetchById } from './utils';

export const useFetch = ({ endpoint, setData, noFetching }: IProps) => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (noFetching) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const getProductsList = async () => {
      setLoading(true);
      try {
        const data = await fakeFetchAllProducts();
        if (data) setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    const arr = endpoint.split('/');
    const id = arr.pop()!;
    const getProductsById = async (id: string) => {
      setLoading(true);
      try {
        const data = await fakeFetchById(id);

        if (data) setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    endpoint.includes('product') ? getProductsById(id) : getProductsList();
  }, [endpoint, setData, noFetching]);
  return { error, loading };
};
