import React from 'react';
import Marquee from 'react-fast-marquee';

// import { Container } from '../Layout/styles';
import { BenefitsWrapper, BenefitsList, BenefitsItem } from './styles';
import { BenefitsProps } from './types';
import { Text3Bold } from '../../ui-kit/Typography';

export const BenefitsComponent: React.FC<BenefitsProps> = ({ benefits }) => {
  return (
    <BenefitsWrapper>
      {/* <Container> */}
      <Marquee>
        <BenefitsList>
          {benefits.map((benefit) => (
            <BenefitsItem key={benefit.id}>
              <Text3Bold case="uppercase">{benefit.title}</Text3Bold>
            </BenefitsItem>
          ))}
        </BenefitsList>
      </Marquee>
      {/* </Container> */}
    </BenefitsWrapper>
  );
};
