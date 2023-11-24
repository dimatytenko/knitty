import { IProduct } from '../../types/api';

export interface IProps {
  title: string;
  price: number;
  id: string;
  isFavourite: boolean;
  isInCart: boolean;

  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
