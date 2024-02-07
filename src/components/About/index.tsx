import React from 'react';

import { AboutCardProps } from '../../ui-kit/Card/About/types';
import { AboutCard } from '../../ui-kit/Card/About';
import { Container } from '../Layout/styles';
import { AboutWrapper, AboutSubtitle, AboutTitle } from './styles';
import { Slider } from '../../ui-kit/Slider';
import { SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

interface AboutComponentProps {
  data: AboutCardProps[];
}

export const AboutComponent: React.FC<AboutComponentProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <AboutWrapper>
      <Container>
        <AboutSubtitle>{t('about.preTitile')}</AboutSubtitle>
        <AboutTitle>{t('about.text')}</AboutTitle>

        <Slider
          isNavigation
          isLoop
          slidesPerViewMobile={1}
          slidesPerViewTablet={2}
          slidesPerViewDesktop={3}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <AboutCard
                title={item.title}
                subtitle={item.subtitle}
                img={item.img}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </Container>
    </AboutWrapper>
  );
};
