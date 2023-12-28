import { ImageComponent } from '../../ui-kit/ImageComponent/Index';
import { IPhotosBlockProps } from './types';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const SwiperPhotoBlock = ({ list }: IPhotosBlockProps) => {
  return (
    <Swiper>
      {list.map(({ image, id }) => (
        <SwiperSlide key={id}>
          <ImageComponent image={image} alt="model" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
