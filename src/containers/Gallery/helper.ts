interface IQueryParams {
  id: number;
  activeFilter: number;
  pageFilter: number;
  pageSizeFilter: number;
  orderingFilter: 'price' | '-price' | null;
}
export const genereteQueryParams = ({
  id,
  activeFilter,
  pageFilter,
  pageSizeFilter,
  orderingFilter,
}: IQueryParams) => {
  const category = id === 7 ? '' : `&category=${id}`;
  const filter = activeFilter === 0 ? '' : `&filter=${activeFilter}`;
  const page = `page=${pageFilter}`;
  const pageSize = `&page_size=${pageSizeFilter}`;
  const ordering = orderingFilter === null ? '' : `&ordering=${orderingFilter}`;

  return page + pageSize + filter + category + ordering;
};
