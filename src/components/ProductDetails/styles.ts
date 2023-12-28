import styled from 'styled-components';

export const StyledWrapper = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-around;

  li {
    display: flex;
    align-items: center;
    gap: 20px;
    min-width: 220px;
  }
`;
