import { useSearchParams } from 'react-router-dom';

import { FilterButton } from '../../ui-kit/Buttons';
import { StyledWrapper } from './styles';
// import { filters } from '../../constants/routes';
import { MainLoader } from '../../ui-kit/Loader/MainLoader';
import { useContext } from 'react';
import { GlobalStore } from '../../context/GlobalStore';
import { useFetch } from '../../hooks/useFetch';
import { useGET } from '../../api/fetchApi';

export const TagsRowComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    globalState: { filters },
    loading,
  } = useFetch({
    fetch: useGET({ endpoint: `filters/` }),
    globalStateKey: 'filters',
    cache: true,
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
    <>
      {loading ? (
        <MainLoader />
      ) : (
        <StyledWrapper>
          {filters?.map(({ name, id }) => (
            <FilterButton
              active={
                searchParams.get('filter') === name.toLowerCase() ||
                (name.toLowerCase() === 'all' && !searchParams.get('filter'))
              }
              key={id}
              title={name}
              onClick={() => onChange(name.toLowerCase())}
            />
          ))}
        </StyledWrapper>
      )}
    </>
  );
};
