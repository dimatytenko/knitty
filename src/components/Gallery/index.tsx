import { NoItems } from './NoItems';
import { IGalleryComponentProps } from './types';

export const GalleryComponent = ({
  data,
  wrapper: Wrapper,
  renderItem,
  loading,
}: IGalleryComponentProps) => {
  if (loading) return <div>Loading...</div>;
  if (!data.length) return <NoItems />;

  return (
    <Wrapper>
      {data.map((el) => (
        <li key={el.id}>{renderItem(el)}</li>
      ))}
    </Wrapper>
  );
};
