import { useState } from 'react';
import { FilterButton } from '../../ui-kit/Buttons';
import { GloballyWrapper } from './style';
import { IProps } from './types';

export const TagsRowComponent = ({ setFilters }: IProps) => {
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
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleClick = ({ title, idx }: { title: string; idx: number }) => {
    setFilters((prev) => ({ ...prev, category: title }));
    setActiveIdx(idx);
  };

  return (
    <GloballyWrapper>
      {categories.map((title, idx) => (
        <FilterButton
          active={activeIdx === idx ? true : false}
          key={idx}
          title={title}
          onClick={() => handleClick({ title, idx })}
        />
      ))}
    </GloballyWrapper>
  );
};
