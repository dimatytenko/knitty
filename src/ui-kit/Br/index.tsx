import React from 'react';
import { StyledBr } from './styles';
import { BrProps } from './types';

export const Br: React.FC<BrProps> = (props) => {
  return <StyledBr {...props} />;
};
