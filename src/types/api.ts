export type ProductImage = {
  id: number;
  image: string;
};

export interface IProduct {
  name: string;
  price: number;
  id: string | number;
  isFavourite: boolean;
  isInCart: boolean;
  quantity?: number;
  images: ProductImage[];
  description: string;
}
