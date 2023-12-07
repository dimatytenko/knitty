import { route, paths } from '../../constants/routes';
import { HeroLink } from '../../ui-kit/Links';
import { Text2Bold } from '../../ui-kit/Typography';
import { StyledMainBlock, StyledTitle } from './styles';

export const MainBlock = () => {
  return (
    <StyledMainBlock>
      <Text2Bold $case="uppercase" color="background">
        ETHICALLY MADE IN UKRAINE
      </Text2Bold>
      <StyledTitle $case="uppercase" color="background">
        PURE NATURAL KNITWEAR
      </StyledTitle>
      <HeroLink to={route.gallery.get({ tag: paths.all })}>
        see all knits
      </HeroLink>
    </StyledMainBlock>
  );
};
