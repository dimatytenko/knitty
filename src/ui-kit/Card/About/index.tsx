import React from 'react';

import {
  CardWrapper,
  CardContent,
  ImageWrapper,
  BackContent,
  Title,
  Subtitle,
  Image,
} from './styles';
import { AboutCardProps } from './types';

export const AboutCard: React.FC<AboutCardProps> = ({
  title,
  subtitle,
  img,
}) => {
  return (
    <CardWrapper>
      <CardContent>
        <ImageWrapper>
          <Image src={img} alt={title} />
        </ImageWrapper>
        <BackContent>
          <Title color="background">{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </BackContent>
      </CardContent>
    </CardWrapper>
  );
};
