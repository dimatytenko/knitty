import { useSearchParams } from 'react-router-dom';

import { FilterButton } from '../../ui-kit/Buttons';
import { StyledWrapper } from './styles';
// import { filters } from '../../constants/routes';
import { useFetch } from '../../hooks/useFetch';
import { useGET } from '../../api/fetchApi';

export const TagsRowComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: filters, loading } = useFetch({
    fetch: useGET({ endpoint: `categories/` }),
    globalStateKey: 'categories',
    cache: true
  });

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
      {loading ? (
        <div> Loading...</div>
      ) : (
        filters?.map(({ name, id }) => (
          <FilterButton
            active={
              searchParams.get('filter') === name ||
              (name === 'all' && !searchParams.get('filter'))
            }
            key={id}
            title={name}
            onClick={() => onChange(name)}
          />
        ))
      )}
    </StyledWrapper>
  );
};
