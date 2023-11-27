import { IProduct } from '../types/api';

const list: IProduct[] = new Array(1500).fill(1).map((_, idx) => ({
  title: 'Wood sweter',
  price: 150,
  id: Date.now() + idx,
  isFavourite: false,
  isInCart: false,
}));

export const dataList = list;
