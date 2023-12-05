import React from 'react';

import { listLeft } from '../../Layout/constants';
import { NavList } from '../NavList';
import { TextColor } from '../../../ui-kit/Typography/types';

interface IProps {
  color: TextColor;
}

export const HeaderBlockBottomLeft: React.FC<IProps> = ({ color }) => {
  return <NavList list={listLeft} color={color} />;
};
