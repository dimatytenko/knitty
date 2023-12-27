import styled from 'styled-components';
import { StyledLoader } from '../Loader/ImageSkeleton/styles';

export const StyledImageWrapper = styled.div`
  position: relative;

  ${StyledLoader} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 420px;
  height: 470px;
`;

export const StyledImage = styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  object-position: center;

  position: relative;
  top: 50%;
  left: 50%;

  transform: scale(1.25) translate(-50%, -50%);
  filter: blur(10px);
  opacity: 0;
`;
