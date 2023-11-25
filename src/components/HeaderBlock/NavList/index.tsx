import { NavigationLink } from '../../../ui-kit/Links';
import { StyledNavList } from './styles';
import { IProps } from './types';

export const NavList = ({ list }: IProps) => {
  return (
    <StyledNavList>
      <ul>
        {list.map(({ title, path }) => (
          <li key={title}>
            <NavigationLink to={path}>{title}</NavigationLink>
          </li>
        ))}
      </ul>
    </StyledNavList>
  );
};
