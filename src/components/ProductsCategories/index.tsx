import { LinkWithArrow } from '../../ui-kit/Links';
import { StyledProductsList } from './styles';
import { IProps } from './types';

export const ProductsCategoriesComponent = ({ list }: IProps) => {
  return (
    <StyledProductsList>
      {list.map(({ title, path }) => (
        <li key={title}>
          <LinkWithArrow to={path}>{title}</LinkWithArrow>
        </li>
      ))}
    </StyledProductsList>
  );
};
