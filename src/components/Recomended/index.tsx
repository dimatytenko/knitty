import { StyledGalleryWrapper } from '../../styles/container';
import { ProductCard } from '../../ui-kit/Card/Product';
import { Heading2 } from '../../ui-kit/Typography';
import { GalleryComponent } from '../Gallery';
import { IProps } from './types';

export const Recomended = ({ data, loading, setData }: IProps) => {
  return (
    <>
      <Heading2>You might also like</Heading2>
      <GalleryComponent
        data={data}
        wrapper={StyledGalleryWrapper}
        renderItem={(el) => <ProductCard {...el} setData={setData} />}
        loading={loading}
      />
    </>
  );
};
