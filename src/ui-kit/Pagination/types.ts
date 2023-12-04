import { IFilters } from '../../hooks/useFilters/types';

export interface StyledPaginationProps {
  total: number;
  defaultPageSize: number;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}
