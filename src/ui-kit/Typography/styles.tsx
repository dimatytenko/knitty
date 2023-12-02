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

const justifyCase = ({ $justify }: StyledProps<TextBaseProps>) => {
  return $justify ? $justify : 'unset';
};

const styles = css`
  font-family: inherit;
  font-style: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  text-transform: ${fontCase};
  color: ${color};
  text-decoration: ${decorCase};
  text-align: ${justifyCase};
`;

export const StyledHeading1 = styled.h1`
  ${styles};
  margin: 0;
  margin-top: 30px;
  width: 750px;
  font-size: 100px;
  font-weight: 300;
  line-height: calc(90 / 100); //90%
  text-align: center;
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
