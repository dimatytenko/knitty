import React from 'react';

import { StyledSvg } from './styles';
import { SvgChildren } from './Children';
import { StyledSvgIconProps } from './types';

export const IconSvg: React.FC<StyledSvgIconProps> = ({
  className,
  type,
  width,
  stroke,
  fillChildren,
  height,
  fill,
  viewBox,
  strokeWidth,
}) => {
  if (!type) return null;

  return (
    <StyledSvg
      className={className}
      width={width || '16'}
      height={height || '16'}
      stroke={stroke}
      viewBox={viewBox || '0 0 16 16'}
      strokeWidth={strokeWidth}
      fill={fill}
    >
      <SvgChildren fillChildren={fillChildren} type={type} />
    </StyledSvg>
  );
};
