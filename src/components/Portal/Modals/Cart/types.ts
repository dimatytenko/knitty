import { IProduct } from '../../../../types/api';

export interface IProps {
  cartList: IProduct[];
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalHeaderProps {
  cartListLength: number;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
