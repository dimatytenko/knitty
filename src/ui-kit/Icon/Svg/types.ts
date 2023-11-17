export const colorOptions = <const>['primary', 'secondary', 'none', 'alert'];
export type color = (typeof colorOptions)[number];

export const iconOptions = <const>[
  'search',
  'heart',
  'arrow',
  'logo',
  'logo-2',
  'logo-knitty',
];
export type icon = (typeof iconOptions)[number];

export interface StyledSvgIconProps {
  className?: string;
  type?: icon;
  width?: string;
  height?: string;
  fill?: color | 'none';
  fillChildren?: color | 'none';
  stroke?: color;
  strokeWidth?: number;
  viewBox?: string;
}
