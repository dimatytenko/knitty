import { useEffect, useState } from 'react';
import { IProduct } from '../../types/api';

export const useFavourites = ({ data }: { data: IProduct[] }) => {
  const [favList, setFavList] = useState<IProduct[]>([]);

  useEffect(() => {
    setFavList((prev: IProduct[]) => {
      const set = new Set();
      prev.forEach((el) => {
        set.add(JSON.stringify(el));
      });

      data
        .filter(({ isFavourite }) => isFavourite)
        .forEach((el) => {
          set.add(JSON.stringify(el));
        });

      const normalizeList: IProduct[] = [...set].map(JSON.parse);
      return [...normalizeList];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return { favList, setFavList };
};
