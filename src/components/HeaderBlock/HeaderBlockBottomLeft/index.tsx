import React, { useContext } from 'react';

import { NavList } from '../NavList';
import { TextColor } from '../../../ui-kit/Typography/types';
import { GlobalStore } from '../../../context/GlobalStore';

interface IProps {
  color: TextColor;
}

export const HeaderBlockBottomLeft: React.FC<IProps> = ({ color }) => {
  
  const {
    globalState: { categories },
  } = useContext(GlobalStore)!;



  return (
    <NavList
      list={categories ? categories.slice(0, 3) : []}
      color={color}
    />
  );
};
