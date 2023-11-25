import { IProduct } from '../../types/api';

export interface IProps {
  endpoint: string;
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
  noFetching: boolean;
}
