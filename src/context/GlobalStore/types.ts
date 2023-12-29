export type FiltersType = {
  id: number;
  name: string;
};

export type GlobalFiltersType = {
  filter: number;
  page: number;
  pageSize: number;
  ordering: 'price' | '-price' | null;
};

export type CategoriesType = {
  id: number;
  name: string;
};

export type GlobalStateType = {
  globalFilters: GlobalFiltersType;
  categories: CategoriesType[] | [];
  filters: FiltersType[] | [];
  cartList: [];
  favList: [];
};

export interface IProps {
  children: React.ReactElement;
}
