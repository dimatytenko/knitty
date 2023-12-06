import { TextColor } from '../Typography/types';

export interface IProps {
  title?: string;
  onClick: (val?: any) => void;
  type?: 'button' | 'submit';
  active?: boolean;
  isInCart?: boolean;
  children?: React.ReactElement;
}

export interface IFilterButton extends IProps {
  $active?: boolean;
}

export interface IPropsFavorites {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isFavourite: boolean;
}

export interface IPropsCartButton {
  color?: TextColor;
}
