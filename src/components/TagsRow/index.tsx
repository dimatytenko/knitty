import { useState } from 'react';
import { FilterButton } from '../../ui-kit/Buttons';
import { StyledWrapper } from './styles';
import { IProps } from './types';

const categories = [
  'sweaters',
  'sale',
  'blanket',
  'gloves',
  'socks',
  'woman',
  'man',
  'new',
];

export const TagsRowComponent = ({ setFilters }: IProps) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleClick = ({ title, idx }: { title: string; idx: number }) => {
    setFilters((prev) => ({ ...prev, category: title }));
    setActiveIdx(idx);
  };

  return (
    <StyledWrapper>
      {categories.map((title, idx) => (
        <FilterButton
          active={activeIdx === idx ? true : false}
          key={idx}
          title={title}
          onClick={() => handleClick({ title, idx })}
        />
      ))}
    </StyledWrapper>
  );
};
