import { useState } from 'react';
import { IFilters } from './types';
import { pagination } from '../../constants/pagination';

export const useFilters = () => {
  const [filters, setFilters] = useState<IFilters>({
    category: '',
    sort: { price: 'ALL' },
    pagination: { page: pagination.page },
  });
  return { filters, setFilters };
};
