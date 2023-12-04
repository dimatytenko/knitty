import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { StyledPagination } from './styles';
import { StyledPaginationProps } from './types';

export const Pagination: React.FC<StyledPaginationProps> = ({
  total,
  defaultPageSize,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (page: number, pageSize: number) => {
    const newSearchParams: {
      [key: string]: string;
    } = {};
    searchParams.forEach((value, key) => {
      newSearchParams[key] = value;
    });

    setSearchParams({
      ...newSearchParams,
      page: page.toString(),
      pageSize: pageSize.toString(),
    });
  };

  return (
    <StyledPagination
      defaultCurrent={Number(searchParams.get('page')) ?? 1}
      total={total}
      defaultPageSize={defaultPageSize}
      showLessItems={true}
      onChange={onChange}
    />
  );
};
