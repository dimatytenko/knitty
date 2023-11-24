import { GalleryComponent } from '../../components/Gallery';
import { Container } from '../../components/Layout/styles';
import { ProductCard } from '../../components/ProductCard';
import { TagsRowComponent } from '../../components/TagsRow';
import { useFetch } from '../../hooks/useFetch';
import { useFilters } from '../../hooks/useFilters';
import { StyledGalleryWrapper } from '../../styles/container';

export const Souvenirs = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error, loading, setData } = useFetch({
    endpoint: 'baseURL/api/souvenirs',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { filters, setFilters } = useFilters();

  return (
    <Container>
      <TagsRowComponent setFilters={setFilters} />

      <GalleryComponent
        loading={loading}
        data={data}
        wrapper={StyledGalleryWrapper}
        renderItem={(el) => (
          <ProductCard {...el} key={el.id} setData={setData} />
        )}
      />
    </Container>
  );
};
