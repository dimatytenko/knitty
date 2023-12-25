import { IProduct, ProductImage } from '../../types/api';
import { IFaqItem } from '../../types/faq';

export interface IProductDescrtiptionProps {
  data: IProduct;
}

export interface IPhotosBlockProps {
  list: ProductImage[];
}

export interface IDescriptionProps {
  list: IFaqItem[];
}

export interface IInfoTitle {
  title: string;
  price: number;
}

export interface IInfoDescriptionProps{
  description: string;
}
