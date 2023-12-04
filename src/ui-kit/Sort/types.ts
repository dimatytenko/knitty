import { IFilters } from '../../hooks/useFilters/types';

export interface IProps {
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}
