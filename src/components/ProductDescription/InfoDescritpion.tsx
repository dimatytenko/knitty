import { HorizontalSeparator } from '../../ui-kit/HorizontalSeparator';
import { Text1Bold, Text2Bold } from '../../ui-kit/Typography';
import CollapseComponent from '../Collapse';
import { SizeGuideButton } from './SizeGuideButton';
import { StyledInfoDescription, StyledInfoDescriptionTitle } from './styles';
import { descriptionList } from './utils';

export const InfoDescription = () => {
  return (
    <StyledInfoDescription>
      <HorizontalSeparator />
      <StyledInfoDescriptionTitle>
        <Text2Bold $case="uppercase">Description</Text2Bold>
        <SizeGuideButton />
      </StyledInfoDescriptionTitle>
      <HorizontalSeparator />
      <Text1Bold>
        Ethno traces the roots of our Ukranian culture, with intricate tonal
        symbols traditionally used by our Pagan ancestors to keep you balanced
        and in harmony. Fluffy, fuzzy and impossibly warm, Ethno's prolonged
        sleeves are the final cherry on top. Inspired by unique Ukranian
        ethnographic patterns, it's perfectly oversized and promises to keep you
        twice as cozy.
      </Text1Bold>
      <HorizontalSeparator />
      <CollapseComponent list={descriptionList} />
    </StyledInfoDescription>
  );
};
