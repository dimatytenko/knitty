import { IProduct } from '../../../types/api';
import { TextColor } from '../../../ui-kit/Typography/types';

export interface IProps {
  favList: IProduct[];
  color: TextColor;
}
