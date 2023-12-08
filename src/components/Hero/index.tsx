import { StyledHeroWrapper } from './styles';
import { Video } from '../../ui-kit/Video';
import { MainBlock } from './MainBlock';

import video from './assets/video.mp4';

export const HeroComponent = () => {
  return (
    <StyledHeroWrapper>
      <Video src={video} />
      <MainBlock />
    </StyledHeroWrapper>
  );
};
