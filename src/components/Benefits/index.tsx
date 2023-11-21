import React from 'react';

import { Container } from '../Layout/styles';
import { BenefitsWrapper, BenefitsList, BenefitsItem } from './styles';
import { BenefitsProps } from './types';
import { Text3Bold } from '../../ui-kit/Typography';

export const BenefitsComponent: React.FC<BenefitsProps> = ({ benefits }) => {
  const updatedBenefits = [...benefits, ...benefits, ...benefits];

  return (
    <BenefitsWrapper>
      <Container>
        <BenefitsList>
          {updatedBenefits.map((benefit, ind) => (
            <BenefitsItem key={benefit.id + ind}>
              <Text3Bold case="uppercase">{benefit.title}</Text3Bold>
            </BenefitsItem>
          ))}
        </BenefitsList>
      </Container>
    </BenefitsWrapper>
  );
};
