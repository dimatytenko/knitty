import { IFilters } from '../../hooks/useFilters/types';
import { IProduct } from '../../types/api';

export interface IGalleryComponentProps {
  data: IProduct[];
  wrapper: any;
  renderItem: (el: any) => React.ReactElement;
  loading?: boolean;
  filters: IFilters;
}
