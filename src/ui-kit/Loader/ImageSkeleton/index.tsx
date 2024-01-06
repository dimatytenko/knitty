import { Logo2 } from './path';
import { StyledSkeleton } from './styles';

export const ImageSkeleton = () => {
  return (
    <StyledSkeleton>
      <svg width="280" height="306">
        <Logo2 />
      </svg>
    </StyledSkeleton>
  );
};
