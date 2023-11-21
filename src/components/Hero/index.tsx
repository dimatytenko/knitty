import { Container } from '../Layout/styles';
import { StyledContent, StyledHeroWrapper } from './styled';

export const HeroComponent = () => {
  return (
    <Container>
      <StyledHeroWrapper>
        <StyledContent></StyledContent>
      </StyledHeroWrapper>
    </Container>
  );
};
