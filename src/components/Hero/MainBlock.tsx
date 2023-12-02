import { route } from '../../constants/routes';
import { HeroLink } from '../../ui-kit/Links';
import { Heading1, Text2Bold } from '../../ui-kit/Typography';
import { StyledMainBlock } from './styles';

export const MainBlock = () => {
  return (
    <StyledMainBlock>
      <Text2Bold $case="uppercase" color="background">
        ETHICALLY MADE IN UKRAINE
      </Text2Bold>
      <Heading1 $case="uppercase" color="background">
        PURE NATURAL KNITWEAR
      </Heading1>
      <HeroLink to={route.gallery.path}> see all knits</HeroLink>
    </StyledMainBlock>
  );
};
