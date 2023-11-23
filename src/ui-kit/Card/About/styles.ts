import styled, { css } from 'styled-components';

import { Text3Bold } from '../../Typography';

const styles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s linear;
`;

export const FrontWrapper = styled.div`
  ${styles}
  background-color: ${({ theme }) => theme.palette.colors.system};
  transform: perspective(1000px) rotateY(0deg);
`;

export const BackWrapper = styled.div`
  ${styles}
  background-color: ${({ theme }) => theme.palette.colors.background};
  padding: 100px 29px 50px;
  transform: perspective(1000px) rotateY(180deg);
`;

export const CardWrapper = styled.div`
  position: relative;
  width: 426px;
  height: 540px;
  cursor: pointer;

  &:hover ${FrontWrapper} {
    transform: perspective(1000px) rotateY(-180deg);
  }

  &:hover ${BackWrapper} {
    transform: perspective(1000px) rotateY(0deg);
  }
`;

export const FrontContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const BackContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Subtitle = styled(Text3Bold).attrs({
  $case: 'uppercase',
})`
  text-align: center;
`;
