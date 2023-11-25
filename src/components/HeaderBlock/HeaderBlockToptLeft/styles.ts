import styled from 'styled-components';

export const StyledHeaderTop = styled.div`
  width: 100%;
  height: 40px;
  padding-bottom: 9px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.colors.line};

  display: flex;
  align-items: center;
  gap: 10px;
`;
