import React from 'react';

import { StyledPagination } from './styles';
import { StyledPaginationProps } from './types';

export const Pagination: React.FC<StyledPaginationProps> = ({
  total,
  defaultPageSize,
}) => {
  return (
    <StyledPagination
      defaultCurrent={1}
      total={total}
      defaultPageSize={defaultPageSize}
      showLessItems={true}
    />
  );
};
