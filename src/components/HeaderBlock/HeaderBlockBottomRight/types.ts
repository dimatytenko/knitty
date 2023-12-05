import { IProduct } from '../../../types/api';
import { TextColor } from '../../../ui-kit/Typography/types';

export interface IProps {
  favList: IProduct[];
  cartList: IProduct[];
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
  color: TextColor;
}
