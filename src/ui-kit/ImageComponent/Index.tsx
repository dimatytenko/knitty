import { useRef, useState } from 'react';
import { ImageSkeleton } from '../Loader/ImageSkeleton';
import gsap from 'gsap';
import { IProps } from './types';
import { StyledImageWrapper, ImageWrapper, StyledImage } from './styles';

export const ImageComponent = ({
  image,
  alt,
  width = "auto",
  height = "100%",
}: IProps) => {
  const refImage = useRef(null);
  const [loading, setLoading] = useState(true);

  const onLoad = () => {
    setLoading(false);
    gsap.to(refImage.current, {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1.5,
    });
  };

  return (
    <StyledImageWrapper style={{ width, height }}>
      {loading && <ImageSkeleton />}
      <ImageWrapper>
        <StyledImage
          ref={refImage}
          src={image}
          alt={alt}
          onLoad={onLoad}
          loading="lazy"
          width={width}
          height={height}
        />
      </ImageWrapper>
    </StyledImageWrapper>
  );
};
