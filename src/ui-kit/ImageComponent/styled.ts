import styled from 'styled-components';
import { StyledLoader } from '../Loader/ImageSkeleton/styles';

export const StyledImageWrapper = styled.div`
  position: relative;

  ${StyledLoader} {
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    transform: scale(1.5);
    filter: blur(10px);
    opacity: 0;
  }
`;
