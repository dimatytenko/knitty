import { FilterButton } from '../../ui-kit/Buttons';
import { GloballyWrapper } from './style';

export const TagsRowComponent = () => {
  const categories = [
    'Sweaters',
    'sale',
    'blanket',
    'Gloves',
    'Socks',
    'woman',
    'man',
    'New',
  ];

  return (
    <GloballyWrapper>
      {categories.map((title) => (
        <FilterButton title={title} onClick={() => {}} />
      ))}
    </GloballyWrapper>
  );
};
