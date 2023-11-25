import store from 'store';
import { useState } from 'react';
import { GalleryComponent } from '../../components/Gallery';
import { Container } from '../../components/Layout/styles';
import { ProductCard } from '../../ui-kit/Card/Product';
import { TagsRowComponent } from '../../components/TagsRow';
import { useFetch } from '../../hooks/useFetch';
import { useFilters } from '../../hooks/useFilters';
import { StyledGalleryWrapper } from '../../styles/container';
import { useCart } from '../../hooks/useCart/useCart';
import { IProduct } from '../../types/api';
import { useStorageObserver } from '../../hooks/useStorageObserver';

export const Man = () => {
  const [data, setData] = useState<IProduct[] | []>(store.get('man') || []);

  useStorageObserver({
    storageKey: 'man',
    data,
    setData,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { error, loading } = useFetch({
    endpoint: 'baseURL/api/man',
    setData,
    noFetching: data.length > 0,
  });

  useCart({ data });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { filters, setFilters } = useFilters();

  return (
    <Container>
      <TagsRowComponent setFilters={setFilters} />
      <GalleryComponent
        loading={loading}
        data={data}
        wrapper={StyledGalleryWrapper}
        renderItem={(el) => <ProductCard {...el} setData={setData} />}
      />
    </Container>
  );
};
