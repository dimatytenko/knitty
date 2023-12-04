import { IProduct } from '../types/api';

const generateRandomPrice = () => {
  return Math.abs(Math.floor(Math.random() * (150 - 600 + 1)) + 150);
};

const list: IProduct[] = new Array(1500).fill(1).map((_, idx) => ({
  title: 'Wood sweter',
  price: generateRandomPrice(),
  id: Date.now() + idx,
  isFavourite: false,
  isInCart: false,
}));

export const dataList = list;
