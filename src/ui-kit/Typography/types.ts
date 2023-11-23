import { WithChildren } from '../../types/helpers';

export const caseOptions = ['uppercase', 'lowercase', 'capitalize'];
export type caseType = (typeof caseOptions)[number];

export const colorOptions = <const>['primary', 'secondary'];
export type TextColor = (typeof colorOptions)[number];

export type TextBaseProps = WithChildren & {
  $case?: caseType;
  color?: TextColor;
};
