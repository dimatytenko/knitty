import { IGalleryComponentProps } from './types';

export const GalleryComponent = ({
  data,
  wrapper: Wrapper,
  renderItem,
  loading,
}: IGalleryComponentProps) => {
  if (loading) return <div>Loading...</div>;

  return <Wrapper>{data.map((el) => renderItem(el))}</Wrapper>;
};
