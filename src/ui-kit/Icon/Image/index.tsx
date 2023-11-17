import React from 'react';

import decor from './assets/decor.png';

import { Icon as SIcon } from './styles';
import { StyledIconProps } from './types';

const getSrc = (type?: string) => {
  switch (type) {
    case 'decor':
      return decor;

    default:
      return '';
  }
};

export const IconImage: React.FC<StyledIconProps> = ({
  className,
  type,
  alt,
  width,
  height,
}) => {
  if (!type) return null;
  return (
    <SIcon
      className={className}
      src={getSrc(type)}
      width={width}
      height={height}
      alt={alt || 'Image'}
    />
  );
};
