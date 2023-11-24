/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
// eslint-disable-next-line import/named
import styled, { css, StyledProps } from 'styled-components';

import { TextBaseProps } from './types';

const color = ({ color, theme }: StyledProps<TextBaseProps>) => {
  return color ? theme.palette.colors[color] : theme.palette.colors.primary;
};

const fontCase = ({ $case }: StyledProps<TextBaseProps>) => {
  return $case ? $case : 'none';
};

const decorCase = ({ $decor }: StyledProps<TextBaseProps>) => {
  return $decor ? $decor : 'none';
};

const styles = css`
  font-family: inherit;
  font-style: inherit;
  font-weight: inherit;
  font-size: inherit;
  text-transform: ${fontCase};
  color: ${color};
  line-height: inherit;
  text-decoration: ${decorCase};
`;

export const StyledHeading1 = styled.h1`
  ${styles};
  font-size: 50px;
`;

export const StyledHeading2 = styled.h2`
  ${styles};
  font-size: 50px;
`;

export const StyledHeading3 = styled.h3`
  ${styles};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.1;
`;

export const TextBody1 = styled.p``;

export const TextBody1Bold = styled.p`
  ${styles};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.1;
`;

export const TextBody2Bold = styled.p`
  ${styles};
  font-weight: 500;
  line-height: 1.1;
`;

export const TextBody3Bold = styled.p`
  ${styles};
  font-weight: 500;
  line-height: 1.2;
`;
