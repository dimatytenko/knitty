import styled from 'styled-components';

export const StyledGalleryWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 35px;
  column-gap: 10px;
`;

export const StyledCartGalleryWrapper = styled.ul`
  flex: 1;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px; /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* цвет зоны отслеживания */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.palette.colors.line}; /* цвет бегунка */
  }
`;
