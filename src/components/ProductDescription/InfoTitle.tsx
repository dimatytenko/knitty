import { Heading2, Text2Bold } from '../../ui-kit/Typography';
import { StyledInfoTitle } from './styles';
import { IInfoTitle } from './types';

export const InfoTitle = ({ title, price }: IInfoTitle) => {
  return (
    <StyledInfoTitle>
      <Heading2>{title}</Heading2>
      <Text2Bold>€{price}</Text2Bold>
    </StyledInfoTitle>
  );
};
