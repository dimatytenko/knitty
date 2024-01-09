import styled from 'styled-components';

export const StyledModalBurger = styled.div`
  width: 100vw;
  height: 100%;
`;

export const StyledBubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.colors.background};
`;

export const StyledBodyWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const StyledButtonClose = styled.button`
  position: relative;
  z-index: 2;
`;

export const StyledBodyFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 10px;
  }

  p,
  a {
    font-size: 20px;
    text-transform: uppercase;
  }
`;

export const WrapperModalCart = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`;

export const StyledItem = styled.a`
  text-transform: capitalize;
  font-size: 50px;
  display: block;

  &.active {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.7));
  }
`;
