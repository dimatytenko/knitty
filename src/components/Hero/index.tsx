import { StyledHeroWrapper } from './styles';
import { Video } from '../../ui-kit/Video';
import { MainBlock } from './MainBlock';

export const HeroComponent = () => {
  return (
    <StyledHeroWrapper>
      <Video />
      <MainBlock />
    </StyledHeroWrapper>
  );
};
