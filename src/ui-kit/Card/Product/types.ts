import { IProduct } from '../../../types/api';

export interface IProps {
  name: string;
  price: number;
  id: string;
  isFavourite: boolean;
  isInCart: boolean;
  img_preview: string;

  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
