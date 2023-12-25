import { useRef, useState } from 'react';
import { ImageSkeleton } from '../Loader/ImageSkeleton';
import gsap from 'gsap';
import { IProps } from './types';
import { StyledImageWrapper } from './styled';

export const ImageComponent = ({
  image,
  alt,
  width = 318,
  height = 420,
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
    <StyledImageWrapper>
      {loading && <ImageSkeleton />}
      <img
        ref={refImage}
        src={image}
        alt={alt}
        onLoad={onLoad}
        loading="lazy"
        width={width}
        height={height}
      />
    </StyledImageWrapper>
  );
};
