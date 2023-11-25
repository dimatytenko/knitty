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
  Close
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
      case "close":
        return <Close/>;

    default:
      return null;
  }
};
