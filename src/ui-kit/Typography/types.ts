import { WithChildren } from '../../types/helpers';

export const caseOptions = ['uppercase', 'lowercase', 'capitalize'];
export type caseType = (typeof caseOptions)[number];

export const decorOptions = ['underline', 'line-through', 'overline'];
export type decorType = (typeof decorOptions)[number];

export const justifyOptions = ['center', 'left', 'right'];
export type justifyType = (typeof decorOptions)[number];

export const colorOptions = <const>[
  'primary',
  'secondary',
  'unfocus',
  'background',
  'grey',
];
export type TextColor = (typeof colorOptions)[number];

export type TextBaseProps = WithChildren & {
  $case?: caseType;
  color?: TextColor;
  $decor?: decorType;
  $justify?: justifyType;
  $width?: number;
};
