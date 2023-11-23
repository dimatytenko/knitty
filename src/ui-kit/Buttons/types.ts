export interface IProps {
  title: string;
  onClick: (val?: any) => void;
  type?: 'button' | 'submit';
}

export interface IFilterButton extends IProps {
  active?: boolean;
}
