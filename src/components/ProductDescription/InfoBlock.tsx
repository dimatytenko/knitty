import { InfoControls } from './InfoControls';
import { InfoDescription } from './InfoDescritpion';
import { InfoTitle } from './InfoTitle';
import { StyledInfoBlock, StyledStickyWrapper } from './styles';
import { IProductDescrtiptionProps } from './types';

export const InfoBlock = ({ data }: IProductDescrtiptionProps) => {
  return (
    <StyledInfoBlock>
      <StyledStickyWrapper>
        <InfoTitle title={data.title} price={data.price} />
        <InfoControls id={data.id} />
        <InfoDescription />
      </StyledStickyWrapper>
    </StyledInfoBlock>
  );
};
