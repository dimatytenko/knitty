import { useMedia } from 'use-media';
import { HeaderComponent } from '../../../components/Layout/Header';
import { MobileHeaderComponent } from '../../../components/Layout/MobileHeader';

export const Header = () => {
  const isDesktop = useMedia({ minWidth: '900px' });

  return (
    <>
      {isDesktop ? (
        <HeaderComponent />
      ) : (
        <MobileHeaderComponent />
      )}
    </>
  );
};
