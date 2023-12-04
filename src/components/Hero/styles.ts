import styled from 'styled-components';

export const StyledHeroWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledMainBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;
