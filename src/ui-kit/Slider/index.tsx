import React, { useRef, PropsWithChildren } from 'react';
import { Navigation } from 'swiper/modules';

import { StyledSwiper, ArrowButton, PrevArrow, NextArrow } from './styles';
import { SliderProps } from './types';

export const Slider: React.FC<PropsWithChildren & SliderProps> = ({
  isNavigation,
  isLoop,
  spaceBetweenMobile,
  spaceBetweenTablet,
  spaceBetweenDesktop,
  slidesPerViewMobile,
  slidesPerViewTablet,
  slidesPerViewDesktop,
  children,
}) => {
  const modules = [Navigation];
  // const arrayChildren = Children.toArray(children);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const navigationRefs = {
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  };
  const navigation = isNavigation && navigationRefs;

  return (
    <StyledSwiper
      loop={isLoop}
      navigation={navigation}
      modules={[...modules]}
      breakpoints={{
        280: {
          spaceBetween: spaceBetweenMobile ? spaceBetweenMobile : 10,
          slidesPerView: slidesPerViewMobile ? slidesPerViewMobile : 1,
        },
        768: {
          spaceBetween: spaceBetweenTablet ? spaceBetweenTablet : 10,
          slidesPerView: slidesPerViewTablet ? slidesPerViewTablet : 2,
        },
        1280: {
          spaceBetween: spaceBetweenDesktop ? spaceBetweenDesktop : 10,
          slidesPerView: slidesPerViewDesktop ? slidesPerViewDesktop : 3,
        },
      }}
      onInit={(swiper) => {
        if (
          typeof swiper.params.navigation !== 'boolean' &&
          swiper.params.navigation &&
          prevRef.current &&
          nextRef.current
        ) {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }
      }}
    >
   
      {children}
      <ArrowButton ref={prevRef} $position="left">
        <PrevArrow />
      </ArrowButton>
      <ArrowButton ref={nextRef} $position="right">
        <NextArrow />
      </ArrowButton>
    </StyledSwiper>
  );
};
