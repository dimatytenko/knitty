import styled from 'styled-components';

export const StyledProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 84px;
    border-top: 1px solid ${({ theme }) => theme.palette.colors.line};

    &:hover {
      background-color: ${({ theme }) => theme.palette.colors.lightHover};
    }
  }

  li:not(:nth-child(-n + 4)) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.colors.line};
  }
`;
