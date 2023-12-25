import { useMedia } from 'use-media';
import { HeaderComponent } from '../../../components/Layout/Header';
import { MobileHeaderComponent } from '../../../components/Layout/MobileHeader';
import { useFetch } from '../../../hooks/useFetch';
import { useGET } from '../../../api/fetchApi';

export const Header = () => {
  const isDesktop = useMedia({ minWidth: '900px' });

  const { loading } = useFetch({
    fetch: useGET({ endpoint: 'categories/' }),
    globalStateKey: 'categories',
    cache: true,
  });


  return (
    <>
      {isDesktop ? (
        <HeaderComponent loading={loading} />
      ) : (
        <MobileHeaderComponent />
      )}
    </>
  );
};
