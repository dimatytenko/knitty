import { useMedia } from 'use-media';
import { InfoBlock } from './InfoBlock';
import { PhotosBlock } from './PhotosBlock';
import { StyledProductDescription } from './styles';
import { IProductDescrtiptionProps } from './types';
import { SwiperPhotoBlock } from './SwiperPhotoBlock';
import gsap from 'gsap';

export const ProductDescription = ({ data }: IProductDescrtiptionProps) => {
  const isDesktop = useMedia({ minWidth: '900px' });

  const styles = {
    gridTemplateColumns: isDesktop ? '5fr 2fr' : '1fr',
    paddingTop: isDesktop
      ? '0px'
      : gsap.getProperty('#mobile-header', 'height', 'px'),
  };

  return (
    <StyledProductDescription style={styles}>
      {isDesktop ? (
        <PhotosBlock list={data?.images || []} />
      ) : (
        <SwiperPhotoBlock list={data?.images || []} />
      )}
      <InfoBlock data={data} />
    </StyledProductDescription>
  );
};
