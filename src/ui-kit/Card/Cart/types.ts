import { IProduct } from '../../../types/api';

export interface IProps extends IProduct {
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
export type TypeButtonsProps = Pick<IProps, 'id' | 'quantity' | 'setData'>;
