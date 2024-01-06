export type ProductImage = {
  id: number;
  image: string;
};

export interface IProduct {
  name: string;
  price: number;
  id: number;
  quantity?: number;
  images: ProductImage[];
  img_preview: string;
  description: string;
}
