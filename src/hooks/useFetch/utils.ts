import { dataList } from '../../constants/listsData';
import { IProduct } from '../../types/api';

export const fakeFetchAllProducts = (): Promise<IProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataList.splice(0, 30));
    }, 1500);
  });
};

export const fakeFetchById = (id: string): Promise<IProduct[] | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataList.splice(0, 1));
    }, 1500);
  });
};
