import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledInfo = styled.div`
  display: flex;
  gap: 30px;
`;
