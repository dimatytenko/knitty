import styled from 'styled-components';

export const StyledModalCart = styled.div`
  position: absolute;
  right: -100%;
  top: 0;

  width: 450px;
  height: 100%;
  padding: 30px;

  background-color: ${({ theme }) => theme.palette.colors.background};
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 23px;
`;
