import React from 'react';

import { IContainerProps } from './types';
import { StyledContainer } from './styles';

export const Container: React.FC<IContainerProps> = ({ point, children, style }) => {
  return <StyledContainer $point={point} style={style}>{children}</StyledContainer>;
};
