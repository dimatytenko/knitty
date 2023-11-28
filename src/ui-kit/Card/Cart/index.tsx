import { Heading3, Text2Bold } from '../../Typography';
import { Buttons } from './Buttons';
import { StyledCartCard, StyledImageWrapper, StyledInfoBlock } from './styles';
import { IProps } from './types';

export const CartCard = ({ title, id, setData, price, quantity }: IProps) => {
  return (
    <StyledCartCard id="cart-card">
      <StyledImageWrapper></StyledImageWrapper>
      <StyledInfoBlock>
        <Heading3 $case="uppercase">{title}</Heading3>
        <Text2Bold>€{price}</Text2Bold>
        <Buttons quantity={quantity} id={id} setData={setData} />
      </StyledInfoBlock>
    </StyledCartCard>
  );
};
