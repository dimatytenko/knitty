import { useContext, useEffect } from 'react';
import { IGalleryComponentProps } from './types';

export const GalleryComponent = ({
  data,
  wrapper: Wrapper,
  renderItem,
  loading,
}: IGalleryComponentProps) => {
  if (loading) return <div>Loading...</div>;
  if (!data.length) return <div>No items...</div>;

  return (
    <Wrapper>
      {data.map((el) => (
        <li key={el.id}>{renderItem(el)}</li>
      ))}
    </Wrapper>
  );
};
