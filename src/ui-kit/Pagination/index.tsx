import React from 'react';

import { StyledPagination } from './styles';
import { StyledPaginationProps } from './types';

export const Pagination: React.FC<StyledPaginationProps> = ({
  total,
  defaultPageSize,
  setFilters,
}) => {
  const onChange = (page: string) => {
    setFilters((prev) => ({ ...prev, pagination: { page } }));
  };

  return (
    <StyledPagination
      defaultCurrent={1}
      total={total}
      defaultPageSize={defaultPageSize}
      showLessItems={true}
      onChange={onChange}
    />
  );
};
