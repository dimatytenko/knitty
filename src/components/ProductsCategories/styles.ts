import styled from 'styled-components';

export const StyledProductsList = styled.ul`
  margin-top: 120px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 84px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  li:not(:nth-child(-n + 4)) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
