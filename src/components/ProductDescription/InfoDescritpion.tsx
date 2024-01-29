import { HorizontalSeparator } from '../../ui-kit/HorizontalSeparator';
import {  Text2Bold } from '../../ui-kit/Typography';
import CollapseComponent from '../Collapse';
import { SizeGuideButton } from './SizeGuideButton';
import {
  DescriptionText,
  StyledInfoDescription,
  StyledInfoDescriptionTitle,
  StyledTextWrapper,
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
      <StyledTextWrapper>
        <Text2Bold>{description}</Text2Bold>
      </StyledTextWrapper>
      <HorizontalSeparator />
      <CollapseComponent list={descriptionList} />
    </StyledInfoDescription>
  );
};
