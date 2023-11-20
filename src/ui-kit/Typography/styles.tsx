/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
// eslint-disable-next-line import/named
import styled, { css, StyledProps } from 'styled-components';
import { Typography } from 'antd';

import { TextBaseProps } from './types';

const { Text } = Typography;

const color = ({ color, theme }: StyledProps<TextBaseProps>) => {
  return color ? theme.palette.colors[color] : theme.palette.colors.primary;
};

const fontCase = ({ case: _case }: StyledProps<TextBaseProps>) => {
  return _case ? _case : 'none';
};

const styles = css`
  font-family: inherit;
  font-style: inherit;
  font-weight: inherit;
  font-size: inherit;
  text-transform: ${fontCase};
  color: ${color};
  line-height: inherit;
`;

export const StyledHeading2 = styled(Text)`
  ${styles};
  font-size: 50px;
`;

export const TextBody1 = styled(Text)``;

export const TextBody1Bold = styled(Text)`
  ${styles};
  font-size: 14px;
  font-weight: 500;
`;

export const TextBody2Bold = styled(Text)`
  ${styles};
  font-weight: 500;
`;

export const TextBody3Bold = styled(Text)`
  ${styles};
  font-weight: 500;
  line-height: 1.1;
`;

export const TextBody4Bold = styled(Text)`
  ${styles};
  font-size: 20px;
  font-weight: 500;
`;
