import React from 'react';

import { IContainerProps } from './types';
import { StyledContainer } from './styles';

export const Container: React.FC<IContainerProps> = ({ point, children }) => {
  return <StyledContainer $point={point}>{children}</StyledContainer>;
};
