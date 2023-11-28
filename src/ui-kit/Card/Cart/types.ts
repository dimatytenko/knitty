import { IProduct } from '../../../types/api';

export interface IProps extends IProduct {
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
  refCard: React.MutableRefObject<null>;
}
export interface TypeButtonsProps {
  quantity: number;
  id: string | number;
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
  refCard: React.MutableRefObject<null>;
}
