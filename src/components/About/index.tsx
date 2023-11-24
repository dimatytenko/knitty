import React from 'react';

import { AboutCardProps } from '../../ui-kit/Card/About/types';
import { AboutCard } from '../../ui-kit/Card/About';
import { Container } from '../Layout/styles';
import { AboutWrapper, AboutList, AboutSubtitle, AboutTitle } from './styles';

interface AboutComponentProps {
  data: AboutCardProps[];
}

export const AboutComponent: React.FC<AboutComponentProps> = ({ data }) => {
  return (
    <AboutWrapper>
      <Container>
        <AboutSubtitle>Knots of Ukrainian Culture</AboutSubtitle>
        <AboutTitle>
          Our handcrafted creations are a part of our nation`s history,
          reflecting Ukrainian heritage and artistic craftsmanship in every
          pattern and knot
        </AboutTitle>
        <AboutList>
          {data.map((item) => (
            <AboutCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              img={item.img}
            />
          ))}
        </AboutList>
      </Container>
    </AboutWrapper>
  );
};
