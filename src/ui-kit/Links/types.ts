import { TextColor } from '../../ui-kit/Typography/types';
export interface IProps {
  to: string;
  children: React.ReactElement | string;
  color?: TextColor;
}
