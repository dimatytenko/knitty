import { InfoControls } from './InfoControls';
import { InfoDescription } from './InfoDescritpion';
import { InfoTitle } from './InfoTitle';
import { StyledInfoBlock, StyledStickyWrapper } from './styles';
import { IProductDescrtiptionProps } from './types';
import BreadCrumbComponent from './BreadCrumbComponent';

export const InfoBlock = ({ data }: IProductDescrtiptionProps) => {
  return (
    <StyledInfoBlock>
      <StyledStickyWrapper>
        <BreadCrumbComponent data={data} />
        <InfoTitle title={data.name} price={data.price} />
        <InfoControls data={data} />
        <InfoDescription description={data.description} />
      </StyledStickyWrapper>
    </StyledInfoBlock>
  );
};
