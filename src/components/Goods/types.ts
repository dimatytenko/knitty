import { IFilters } from '../../hooks/useFilters/types';
import { IGalleryComponentProps } from '../Gallery/types';

export interface IGoodsComponentProps extends IGalleryComponentProps {
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
  tag?: string;
  filters: IFilters;
}
