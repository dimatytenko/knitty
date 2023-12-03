import { IProduct } from '../../types/api';

export interface IProps {
  title: string;
  text: React.ReactElement;
  list: IProduct[];
}
