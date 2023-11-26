import { IProduct } from '../../../../types/api';

export interface IProps {
  cartList: IProduct[];
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
