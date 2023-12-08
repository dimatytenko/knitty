import { IProduct } from '../../types/api';

export interface IProps {
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
  loading: boolean;
  data: IProduct[];
}
