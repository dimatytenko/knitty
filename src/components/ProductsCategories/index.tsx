import { CategoriesLink } from '../../ui-kit/Links';
import { StyledProductsList } from './styles';
import { IProps } from './types';

export const ProductsCategoriesComponent = ({ list }: IProps) => {
  return (
    <StyledProductsList>
      {list.map(({ title, path }) => (
        <li key={title}>
          <CategoriesLink to={path}>{title}</CategoriesLink>
        </li>
      ))}
    </StyledProductsList>
  );
};
