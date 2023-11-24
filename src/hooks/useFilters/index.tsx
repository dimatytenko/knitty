import { useState } from 'react';
import { IFilters } from './types';

export const useFilters = () => {
  const [filters, setFilters] = useState<IFilters>({
    category: '',
  });
  return { filters, setFilters };
};
