import { TextColor } from '../Typography/types';

export interface IProps {
  title?: string | React.ReactElement;
  onClick: (val?: any) => void;
  type?: 'button' | 'submit';
  active?: boolean;
  isInCart?: boolean;
  children?: React.ReactElement;
  disabled?: boolean;
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
