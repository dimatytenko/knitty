import styled from 'styled-components';

export const StyledScrollButton = styled.button`
  position: fixed;
  z-index: 100;
  bottom: 5%;
  right: 5%;

  width: 50px;
  height: 50px;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.palette.colors.background};
  border: 1px solid ${({ theme }) => theme.palette.colors.black};

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 0px;

  svg {
    transform: rotate(180deg);
  }
`;
