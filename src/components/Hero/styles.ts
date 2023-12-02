import styled from 'styled-components';
import hero from './assets/hero.jpg';

export const StyledHeroWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  position: relative;
  overflow: hidden;
`;

export const StyledContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.1)
    ),
    url(${hero});*/
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
