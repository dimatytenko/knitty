import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  /* overflow: hidden; */
`;

export const StyledInputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;

  label {
    cursor: pointer;
  }

  input {
    width: 180px;
    display: inline-block;
    padding: 5px;

    background-color: transparent;
    border-bottom: 1px solid transparent;

    font-size: 14px;
  }
`;

export const StyledSearchModal = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 320px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: ${({ theme }) => theme.palette.colors.background};

  z-index: 110;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
`;

export const StyledModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
