import { useRef } from 'react';
import { Heading3, Text2Bold } from '../../Typography';
import { Buttons } from './Buttons';
import { StyledCartCard, StyledImageWrapper, StyledInfoBlock } from './styles';
import { IProps } from './types';

export const CartCard = ({ setData, ...props }: IProps) => {
  const refCard = useRef(null);

  return (
    <StyledCartCard ref={refCard}>
      <StyledImageWrapper>
        <img src={props.img_preview} alt={props.name} />
      </StyledImageWrapper>
      <StyledInfoBlock>
        <Heading3 $case="uppercase">{props.name}</Heading3>
        <Text2Bold>€{props.price}</Text2Bold>
        <Buttons
          quantity={props.quantity!}
          id={props.id}
          setData={setData}
          refCard={refCard}
        />
      </StyledInfoBlock>
    </StyledCartCard>
  );
};
