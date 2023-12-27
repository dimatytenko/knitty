import { FilterButton } from '../../ui-kit/Buttons';
import { StyledWrapper } from './styles';
import { MainLoader } from '../../ui-kit/Loader/MainLoader';
import { IProps } from './types';
import { useContext, useState } from 'react';
import { useLocale } from 'antd/es/locale';
import { useLocation } from 'react-router';
import { GlobalStore } from '../../context/GlobalStore';

export const TagsRowComponent = ({
  loading,
  filters,
  activeFilter,
}: IProps) => {
  const [active, setActive] = useState(activeFilter || 1);
  const { globalSetter } = useContext(GlobalStore)!;

  return (
    <>
      {loading ? (
        <MainLoader />
      ) : (
        <StyledWrapper>
          {filters.map(({ name, id }) => (
            <FilterButton
              active={active === id}
              key={id}
              title={name}
              onClick={() => {
                setActive(id)
                globalSetter((prev) => {
                  prev.globalFilters.filter = id;
                  return { ...prev };
                });
              }}
            />
          ))}
        </StyledWrapper>
      )}
    </>
  );
};
