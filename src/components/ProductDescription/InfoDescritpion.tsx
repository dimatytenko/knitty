import { HorizontalSeparator } from '../../ui-kit/HorizontalSeparator';
import { Text1Bold } from '../../ui-kit/Typography';
import CollapseComponent from '../Collapse';
import { SizeGuideButton } from './SizeGuideButton';
import {
  DescriptionText,
  StyledInfoDescription,
  StyledInfoDescriptionTitle,
} from './styles';
import {  IInfoDescriptionProps } from './types';
import { descriptionList } from './utils';

export const InfoDescription = ({description}:IInfoDescriptionProps) => {
  return (
    <StyledInfoDescription>
      <HorizontalSeparator />
      <StyledInfoDescriptionTitle>
        <DescriptionText>Description</DescriptionText>
        <SizeGuideButton />
      </StyledInfoDescriptionTitle>
      <HorizontalSeparator />
      <Text1Bold>{description}</Text1Bold>
      <HorizontalSeparator />
      <CollapseComponent list={descriptionList} />
    </StyledInfoDescription>
  );
};
