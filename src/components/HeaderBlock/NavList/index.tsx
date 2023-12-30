import { useContext } from 'react';
import { paths, route } from '../../../constants/routes';
import { NavigationLink } from '../../../ui-kit/Links';
import { StyledNavList } from './styles';
import { IProps } from './types';
import { GlobalStore } from '../../../context/GlobalStore';

export const NavList = ({ list, color }: IProps) => {
  const { globalSetter } = useContext(GlobalStore)!;

  return (
    <StyledNavList>
      <ul>
        {list.map(({ name, id }) => (
          <li key={id}>
            <NavigationLink
              to={route.gallery.get({ tag: paths[name.toLowerCase()] })}
              color={color}
              onClick={() =>
                globalSetter((prev) => {
                  prev.globalFilters.page = 1;
                  return { ...prev };
                })
              }
            >
              {name}
            </NavigationLink>
          </li>
        ))}
      </ul>
    </StyledNavList>
  );
};
