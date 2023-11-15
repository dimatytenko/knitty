import { FC } from 'react';

import { LayoutComponent } from '../../components/Layout';
import { WithChildren } from '../../types/helpers';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: FC<WithChildren> = ({ children }) => {
  return (
    <LayoutComponent header={<Header />} footer={<Footer />}>
      {children}
    </LayoutComponent>
  );
};
