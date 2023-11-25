import { IProduct } from '../../types/api';

export interface IProps {
  storageKey: string;
  data: IProduct[];
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
