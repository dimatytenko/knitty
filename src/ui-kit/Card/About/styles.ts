import styled, { css } from 'styled-components';

import { Heading2, Text3Bold } from '../../Typography';

const common = css`
  transition: ${({ theme }) => theme.transitions.main};
`;

export const Title = styled(Heading2).attrs({
  color: 'background',
})`
  opacity: 0;
  ${common};
`;

export const Subtitle = styled(Text3Bold).attrs({
  color: 'background',
})`
  text-transform: uppercase;
  text-align: center;
  opacity: 0;
  ${common};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${common};
  opacity: 1;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${common};
`;

export const Snip = styled.div`
  position: relative;
  width: 100%;
`;

export const CardWrapper = styled.div`
  position: relative;
  width: 426px;
  height: 540px;
  cursor: pointer;
  ${common};

  &:hover {
    ${Image} {
      transform: scale(1.1);
    }
    ${ImageWrapper} {
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
      filter: brightness(0.5);
    }

    ${Title} {
      opacity: 1;
    }

    ${Subtitle} {
      opacity: 1;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50px;
    right: 29px;
    background-color: #fff;
    z-index: 1;
    opacity: 0;
    ${common};
  }

  &::before {
    width: 0;
    height: 1px;
  }
  &::after {
    width: 1px;
    height: 0;
  }

  &:hover::before {
    width: 80px;
    opacity: 1;
  }
  &:hover::after {
    height: 80px;
    opacity: 1;
  }
`;

export const CardContent = styled.div``;

export const BackContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 100px 29px 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
