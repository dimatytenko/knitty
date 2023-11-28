import styled from 'styled-components';

export const StyledCartCard = styled.article`
  position: relative;

  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 20px;
`;

export const StyledImageWrapper = styled.div`
  width: 140px;
  height: 140px;
  background-color: gray;
`;

export const StyledInfoBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledIncrementButtons = styled.div`
  display: inline-flex;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.palette.colors.line};

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px 20px;
  }

  span {
    display: inline-flex;
    height: 100%;
    width: fit-content;
    background-color: transparent;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
