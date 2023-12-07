import { useSearchParams } from 'react-router-dom';

import { FilterButton } from '../../ui-kit/Buttons';
import { StyledWrapper } from './styles';
import { filters } from '../../constants/routes';

export const TagsRowComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (filter: string) => {
    const newSearchParams: {
      [key: string]: string;
    } = {};
    searchParams.forEach((value, key) => {
      if (key === 'filter') {
        return;
      }
      newSearchParams[key] = value;
    });

    if (filter !== 'all') {
      newSearchParams.filter = filter;
    }

    setSearchParams({
      ...newSearchParams,
    });
  };

  return (
    <StyledWrapper>
      {filters.map((title, idx) => (
        <FilterButton
          active={
            searchParams.get('filter') === title ||
            (title === 'all' && !searchParams.get('filter'))
          }
          key={idx}
          title={title}
          onClick={() => onChange(title)}
        />
      ))}
    </StyledWrapper>
  );
};
