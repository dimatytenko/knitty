import { TextColor } from '../../ui-kit/Typography/types';
export interface IProps {
  to: string;
  children: React.ReactElement | string;
  color?: TextColor;
  onClick: ()=>void;
}

export type IPropsWithHref = Pick<IProps, 'color' | 'children'> & {
  href?: string;
  target?: string;
  to?: string;
};
