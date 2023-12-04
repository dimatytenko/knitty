type PriceType = 'ASC' | 'DESC' | 'ALL';

export interface IFilters {
  category: string;
  sort: { price: PriceType };
  pagination: { page: number };
}
