/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
// eslint-disable-next-line import/named
import styled, { css, StyledProps } from 'styled-components';

import { StyledSvgIconProps } from './types';

const getColor = ({
  theme,
  color,
  defaultColor,
}: {
  theme: any;
  color?: string;
  defaultColor: string;
}) => {
  switch (color) {
    case 'primary':
      return theme.palette.colors.primary;
    case 'alert':
      return theme.palette.colors.alert;
    case 'back':
      return theme.palette.colors.background;
    case 'none':
      return 'none';

    default:
      return defaultColor;
  }
};

const stroke = ({ theme, stroke }: StyledProps<StyledSvgIconProps>) => {
  return getColor({
    theme,
    color: stroke,
    defaultColor: theme.palette.colors.primary,
  });
};

export const fill = ({ theme, fill }: StyledProps<StyledSvgIconProps>) => {
  return getColor({
    theme,
    color: fill,
    defaultColor: theme.palette.colors.none,
  });
};

export const StyledSvg = styled.svg`
  & > * {
    stroke: ${stroke};
  }
  & > path {
    ${({ strokeWidth }) =>
      strokeWidth &&
      css`
        stroke-width: ${strokeWidth};
      `};
  }
  fill: ${fill};
`;

export const StyledPath = styled.path`
  fill: ${fill};
  stroke: ${stroke};
`;
