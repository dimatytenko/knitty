import styled from 'styled-components';

export const StyledWrapper = styled.div`
width: 100%;
padding: 10px;
overflow-x: hidden;

`

export const StyledMainLoader = styled.div`
  width: 30px;
  height: 30px;

  background-color: ${({ theme }) => theme.palette.colors.line};
  border-radius: 50%;
`;
