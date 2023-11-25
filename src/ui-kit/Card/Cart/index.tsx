import { Heading3, Text2Bold } from '../../Typography';
import { StyledCartCard, StyledImageWrapper, StyledInfoBlock } from './styles';

export const CartCard = ({ title, id, setData, price, quantity }) => {
  return (
    <StyledCartCard as="article">
      <StyledImageWrapper></StyledImageWrapper>
      <StyledInfoBlock>
        <Heading3 $case="uppercase">{title}</Heading3>
        <Text2Bold>€{price}</Text2Bold>
        <p>{id}</p>
      </StyledInfoBlock>
    </StyledCartCard>
  );
};
