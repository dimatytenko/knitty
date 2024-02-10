import styled from 'styled-components';

export const StyledEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;

  p {
    position: absolute;
    top: 35%;
    left: 70%;
  }

  svg {
    transform: scale(0.6);
  }
`;
