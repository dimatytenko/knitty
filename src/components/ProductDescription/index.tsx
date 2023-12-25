import { InfoBlock } from './InfoBlock';
import { PhotosBlock } from './PhotosBlock';
import { StyledProductDescription } from './styles';
import { IProductDescrtiptionProps } from './types';

export const ProductDescription = ({ data }: IProductDescrtiptionProps) => {
  return (
    <>
      <StyledProductDescription>
        <PhotosBlock list={data?.images || []} />
        <InfoBlock data={data} />
      </StyledProductDescription>
    </>
  );
};
