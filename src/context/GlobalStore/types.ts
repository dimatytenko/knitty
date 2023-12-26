export type FiltersType = {
  id: number;
  name: string;
};

export type CategoriesType = {
  id: number;
  name: string;
};

export type GlobalStateType = {
  categories: CategoriesType[] | [];
  filters: FiltersType[] | [];
  cartList: [],
  favList: []
};

export interface IProps {
  children: React.ReactElement;
}
