import { Empty } from '../../ui-kit/Loader/Empty/Empty';
import { MainLoader } from '../../ui-kit/Loader/MainLoader';
import { IGalleryComponentProps } from './types';

export const GalleryComponent = ({
  data,
  wrapper: Wrapper,
  renderItem,
  loading,
}: IGalleryComponentProps) => {
  if (loading) return <MainLoader />;
  if (!data.length) return <Empty />;

  return (
    <Wrapper>
      {data.map((el) => (
        <li key={el.id}>{renderItem(el)}</li>
      ))}
    </Wrapper>
  );
};
