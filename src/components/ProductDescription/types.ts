import { IProduct } from '../../types/api';
import { IFaqItem } from '../../types/faq';

export interface IProductDescrtiptionProps {
  data: IProduct;
}

export interface IPhotosBlockProps {
  list: string[];
}

export interface IDescriptionProps {
  list: IFaqItem[];
}

export interface IInfoTitle {
  title: string;
  price: number;
}
