import { useContext } from 'react';
import { CategoriesLink } from '../../ui-kit/Links';
import { StyledProductsList } from './styles';
import { IProps } from './types';
import { GlobalStore } from '../../context/GlobalStore';

export const ProductsCategoriesComponent = ({ list }: IProps) => {
  const { globalSetter } = useContext(GlobalStore)!;
  return (
    <StyledProductsList>
      {list.map(({ name, id }) => (
        <li key={id}>
          <CategoriesLink
            to="/gallery/all"
            onClick={() =>
              globalSetter((prev) => {
                prev.globalFilters.filter = id;
                return { ...prev };
              })
            }
          >
            {name}
          </CategoriesLink>
        </li>
      ))}
    </StyledProductsList>
  );
};
