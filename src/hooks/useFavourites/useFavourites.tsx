import { useEffect, useState } from 'react';
import { IProduct } from '../../types/api';

export const useFavourites = ({ data }: { data: IProduct[] }) => {
  const [favList, setFavList] = useState<IProduct[]>([]);

  useEffect(() => {
    setFavList(data.filter(({ isFavourite }) => isFavourite));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return { favList, setFavList };
};
