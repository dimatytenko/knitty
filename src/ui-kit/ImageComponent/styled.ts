import styled from 'styled-components';
import { StyledLoader } from '../Loader/ImageSkeleton/styles';

export const StyledImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    transform: scale(1.5);
    filter: blur(10px);
    opacity: 0;
  }

  ${StyledLoader} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
