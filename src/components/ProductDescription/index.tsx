import { InfoBlock } from './InfoBlock';
import { PhotosBlock } from './PhotosBlock';
import { StyledProductDescription } from './styles';
import { IProductDescrtiptionProps } from './types';
import { imagesList } from './utils';

export const ProductDescription = ({ data }: IProductDescrtiptionProps) => {
  return (
    <>
      <StyledProductDescription>
        <PhotosBlock list={imagesList} />
        <InfoBlock data={data} />
      </StyledProductDescription>
    </>
  );
};
