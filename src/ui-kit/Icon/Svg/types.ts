export const colorOptions = <const>[
  'primary',
  'secondary',
  'back',
  'black',
  'none',
  'alert',
  'unfocus',
];
export type color = (typeof colorOptions)[number];

export const iconOptions = <const>[
  'search',
  'heart',
  'arrow',
  'arrow-light',
  'logo',
  'logo-2',
  'logo-knitty',
  'nav-stroke',
  'close',
  'plus',
  'minus',
  'product-origin',
  'material',
  'waterproof',
  'warmth',
  'durability',
  "knitting-needles"
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
