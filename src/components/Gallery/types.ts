import { IProduct } from '../../types/api';
import { IFilters } from '../../hooks/useFilters/types';
export interface IGalleryComponentProps {
  data: IProduct[];
  wrapper: any;
  renderItem: (el: any) => React.ReactElement;
  loading?: boolean;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
  tag?: string;
}
