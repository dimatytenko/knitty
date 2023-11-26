import styled from 'styled-components';

export const StyledGalleryWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 35px;
  column-gap: 10px;
`;

export const StyledCartGalleryWrapper = styled.ul`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
