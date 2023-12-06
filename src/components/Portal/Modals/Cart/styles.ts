import styled from 'styled-components';

export const StyledModalCart = styled.aside`
  position: absolute;
  right: -100%;
  top: 0;

  width: 100%;
  max-width: 450px;
  height: 100%;
  padding: 30px;

  background-color: ${({ theme }) => theme.palette.colors.background};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 23px;
`;

export const StyledTextBlock = styled.div`
  margin: 30px 0;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
