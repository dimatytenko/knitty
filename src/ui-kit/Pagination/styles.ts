import styled from 'styled-components';
import { Pagination } from 'antd';

import { Media } from '../theme/breakpoints';

export const StyledPagination = styled(Pagination)`
  & .ant-pagination-disabled {
    display: none;
  }
  & .ant-pagination-item {
    border: 0;
    margin: 0;
    padding: 0 25px;
    border-radius: 0;
    border-bottom: 2px solid ${({ theme }) => theme.palette.colors.line};

    ${Media.down.m} {
      padding: 0 10px;
    }

    &:not(.ant-pagination-item-active):hover {
      border-bottom: 2px solid ${({ theme }) => theme.palette.colors.primary};
      background-color: transparent;
    }

    &:hover > a {
      color: ${({ theme }) => theme.palette.colors.primary};
    }
  }
  & .ant-pagination-item.ant-pagination-item-active {
    border: 0;
    background-color: transparent;
    border-bottom: 2px solid ${({ theme }) => theme.palette.colors.primary};

    &:hover > a {
      color: ${({ theme }) => theme.palette.colors.primary};
    }
  }
  & .ant-pagination-item > a {
    color: ${({ theme }) => theme.palette.colors.unfocus};
  }
  & .ant-pagination-item-active > a {
    color: ${({ theme }) => theme.palette.colors.primary};
  }

  & .ant-pagination-next .ant-pagination-item-link,
  & .ant-pagination-prev .ant-pagination-item-link {
    &:hover {
      background-color: transparent;
    }
  }
  & .ant-pagination-next,
  & .ant-pagination-prev {
    margin: 0;
    width: 50px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 2px solid ${({ theme }) => theme.palette.colors.line};

    ${Media.down.m} {
      width: 20px;
    }

    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.palette.colors.primary};
      background-color: transparent;
    }
  }

  & .ant-pagination-jump-prev,
  & .ant-pagination-jump-next {
    &:hover .ant-pagination-item-link-icon {
      color: ${({ theme }) => theme.palette.colors.primary};
    }
  }
  & .ant-pagination-options {
    display: none;
  }
`;
