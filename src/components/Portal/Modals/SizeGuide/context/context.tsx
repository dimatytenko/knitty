import { createContext, useState } from 'react';
import { IProps } from './types';

export const SizeGuideContext = createContext(null);

const useSizeGuideContext = () => {
  const [active, setActive] = useState(0);

  return { active, setActive };
};

export const SizeGuideProvider = ({ children }:IProps) => {
  return (
    <SizeGuideContext.Provider value={useSizeGuideContext()}>
      {children}
    </SizeGuideContext.Provider>
  );
};
