import { useMedia } from 'use-media';
import { InfoBlock } from './InfoBlock';
import { PhotosBlock } from './PhotosBlock';
import { StyledProductDescription } from './styles';
import { IProductDescrtiptionProps } from './types';
import { SwiperPhotoBlock } from './SwiperPhotoBlock';
import gsap from 'gsap';
import { Container } from '../Layout/styles';

export const ProductDescription = ({ data }: IProductDescrtiptionProps) => {
  const isDesktop = useMedia({ minWidth: '900px' });

  return (
    <>
      {isDesktop ? (
        <Container>
          <StyledProductDescription
            style={{ gridTemplateColumns: '5fr 2fr', paddingTop: 'unset' }}
          >
            <PhotosBlock list={data?.images || []} />
            <InfoBlock data={data} />
          </StyledProductDescription>
        </Container>
      ) : (
        <>
          <StyledProductDescription
            style={{
              gridTemplateColumns: '1fr',
              paddingTop: gsap.getProperty('#mobile-header', 'height', 'px'),
            }}
          >
            <SwiperPhotoBlock list={data?.images || []} />
            <Container>
              <InfoBlock data={data} />
            </Container>
          </StyledProductDescription>
        </>
      )}
    </>
  );
};
