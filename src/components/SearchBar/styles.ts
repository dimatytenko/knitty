import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  overflow: hidden;
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
