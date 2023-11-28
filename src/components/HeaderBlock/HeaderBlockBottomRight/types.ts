import { IProduct } from '../../../types/api';

export interface IProps {
  favList: IProduct[];
  cartList: IProduct[];
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
