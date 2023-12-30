import { TextColor } from '../../../ui-kit/Typography/types';

type TypeLink = {
  name: string;
  id: number;
};

export interface IProps {
  list: TypeLink[];
  color: TextColor;
}
