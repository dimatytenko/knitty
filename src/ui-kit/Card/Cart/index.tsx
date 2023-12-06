import { useRef } from 'react';
import { Heading3, Text2Bold } from '../../Typography';
import { Buttons } from './Buttons';
import { StyledCartCard, StyledImageWrapper, StyledInfoBlock } from './styles';
import { IProps } from './types';

export const CartCard = ({
  title,
  id,
  setData,
  price,
  quantity,
  image,
}: IProps) => {
  const refCard = useRef(null);
  return (
    <StyledCartCard ref={refCard}>
      <StyledImageWrapper>
        <img src={image} alt={title} />
      </StyledImageWrapper>
      <StyledInfoBlock>
        <Heading3 $case="uppercase">{title}</Heading3>
        <Text2Bold>€{price}</Text2Bold>
        <Buttons
          quantity={quantity!}
          id={id}
          setData={setData}
          refCard={refCard}
        />
      </StyledInfoBlock>
    </StyledCartCard>
  );
};
