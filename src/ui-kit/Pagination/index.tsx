import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

import { StyledPagination } from './styles';
import { StyledPaginationProps } from './types';
import { GlobalStore } from '../../context/GlobalStore';

export const Pagination: React.FC<StyledPaginationProps> = ({
  total,
}) => {
  const {
    globalSetter,
    globalState: {
      globalFilters: { pageSize },
    },
  } = useContext(GlobalStore)!;

  const onChange = (page: number) => {
    globalSetter((prev) => {
      prev.globalFilters.page = page;
      return { ...prev };
    });
  };

  return (
    <StyledPagination
      defaultCurrent={1}
      total={total}
      defaultPageSize={pageSize}
      showLessItems={true}
      onChange={onChange}
    />
  );
};
