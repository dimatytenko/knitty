import React from 'react';

import {
  Search,
  Heart,
  Arrow,
  Logo,
  Logo2,
  LogoKnitty,
  NavStroke,
  ArrowLight,
  Close,
  Plus,
  Minus,
  ProductOrigin,
  Material,
  WaterProof,
  Warmth,
  Durability,
} from './Paths';
import { StyledSvgIconProps } from './types';

export const SvgChildren: React.FC<StyledSvgIconProps> = ({ type }) => {
  switch (type) {
    case 'search':
      return <Search />;
    case 'heart':
      return <Heart />;
    case 'arrow':
      return <Arrow />;
    case 'arrow-light':
      return <ArrowLight />;
    case 'logo':
      return <Logo />;
    case 'logo-2':
      return <Logo2 />;
    case 'logo-knitty':
      return <LogoKnitty />;
    case 'nav-stroke':
      return <NavStroke />;
    case 'close':
      return <Close />;
    case 'plus':
      return <Plus />;
    case 'minus':
      return <Minus />;
    case 'product-origin':
      return <ProductOrigin />;
    case 'material':
      return <Material />;
    case 'waterproof':
      return <WaterProof />;
    case 'warmth':
      return <Warmth />;
    case 'durability':
      return <Durability />;

    default:
      return null;
  }
};
