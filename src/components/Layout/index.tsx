import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { StyledLayout, Main } from './styles';
import { IAppLayoutProps } from '../../types/layout';

export const LayoutComponent: FC<IAppLayoutProps> = ({
  children,
  header,
  footer,
  hideHeader,
  hideFooter,
  ...props
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <StyledLayout {...props}>
      {!hideHeader && header}
      <Main>{children}</Main>

      {!hideFooter && footer}
    </StyledLayout>
  );
};
