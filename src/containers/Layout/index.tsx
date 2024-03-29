import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { LayoutComponent } from '../../components/Layout';
import { WithChildren } from '../../types/helpers';
import { Header } from './Header';
import { Footer } from './Footer';
import { excludePathsFooter, excludePathsHeader } from '../../constants/routes';
import Lenis from '../Lenis/Lenis';

export const Layout: FC<WithChildren> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Lenis>
      <LayoutComponent
        header={<Header />}
        footer={<Footer />}
        hideFooter={excludePathsFooter.some((path) => pathname.includes(path))}
        hideHeader={excludePathsHeader.some((path) => pathname.includes(path))}
      >
        {children}
      </LayoutComponent>
    </Lenis>
  );
};
