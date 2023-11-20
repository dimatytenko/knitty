import React from 'react';

import {
  CardWrapper,
  FrontWrapper,
  FrontContent,
  BackWrapper,
  BackContent,
  Subtitle,
} from './styles';
import { Heading2 } from '../../Typography';
import { AboutCardProps } from './types';

export const AboutCard: React.FC<AboutCardProps> = ({ title, subtitle }) => {
  return (
    <CardWrapper>
      <FrontWrapper>
        <FrontContent></FrontContent>
      </FrontWrapper>
      <BackWrapper>
        <BackContent>
          <Heading2>{title}</Heading2>
          <Subtitle case="uppercase">{subtitle}</Subtitle>
        </BackContent>
      </BackWrapper>
    </CardWrapper>
  );
};
