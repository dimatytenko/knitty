import styled from 'styled-components';

export const StyledHorizontalSeparator = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.palette.colors.line};
`;
