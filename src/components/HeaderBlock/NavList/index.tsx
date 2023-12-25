import { paths, route } from '../../../constants/routes';
import { NavigationLink } from '../../../ui-kit/Links';
import { StyledNavList } from './styles';
import { IProps } from './types';

export const NavList = ({ list, color }: IProps) => {

  return (
    <StyledNavList>
      <ul>
        {list.map(({ name, id }) => (
          <li key={id}>
            <NavigationLink
              to={route.gallery.get({ tag: paths[name.toLowerCase()] })}
              color={color}
            >
              {name}
            </NavigationLink>
          </li>
        ))}
      </ul>
    </StyledNavList>
  );
};
