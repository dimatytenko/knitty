import { css } from 'styled-components';

export const scrollStyles = css`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.colors.grey};
    border-radius: 4px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.palette.colors.hover};
  }
`;
