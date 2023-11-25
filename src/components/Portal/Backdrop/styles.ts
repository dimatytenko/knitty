import styled from 'styled-components';

export const StyledBackDrop = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.palette.colors.backdrop};
  opacity: 0;

  pointer-events: all;
`;
