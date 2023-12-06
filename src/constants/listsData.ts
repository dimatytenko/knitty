import { IProduct } from '../types/api';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';

const generateRandomNumber = (min = 150, max = 800) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const list: IProduct[] = new Array(1500).fill(1).map((_, idx) => {
  return {
    title: 'Wood sweter',
    price: generateRandomNumber(),
    id: Date.now() + idx,
    isFavourite: false,
    isInCart: false,
    image: idx % 2 ? img1 : img2,
  };
});

export const dataList = list;
