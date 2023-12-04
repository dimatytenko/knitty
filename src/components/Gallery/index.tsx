import { pagination } from '../../constants/pagination';
import { NoItems } from './NoItems';
import { IGalleryComponentProps } from './types';

export const GalleryComponent = ({
  data,
  wrapper: Wrapper,
  renderItem,
  loading,
  filters,
}: IGalleryComponentProps) => {
  if (loading) return <div>Loading...</div>;
  if (!data.length) return <NoItems />;

  const start = (filters.pagination.page - 1) * pagination.perPage;
  const end = filters.pagination.page * pagination.perPage;

  return (
    <Wrapper>
      {data
        .slice(start, end)
        .filter((product) =>
          product?.category ? product.category === filters.category : true,
        )
        .sort(({ price: priceA }, { price: priceB }) => {
          switch (filters.sort.price) {
            case 'ASC':
              return priceA - priceB;
            case 'DESC':
              return priceB - priceA;
            case 'ALL':
              return 0;
          }
        })
        .map((el) => (
          <li key={el.id}>{renderItem(el)}</li>
        ))}
    </Wrapper>
  );
};
