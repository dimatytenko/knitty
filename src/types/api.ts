export interface IProduct {
  title: string;
  price: number;
  id: string | number;
  isFavourite: boolean;
  isInCart: boolean;
  quantity?: number;
  image: string;
}
