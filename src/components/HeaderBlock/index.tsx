import { NavigationLink } from '../../ui-kit/Links';
import { StyledHeaderTop } from '../HeaderBlocktLeft/styles';
import { StyledHeaderBlock } from './styles';
import { IProps } from './types';

export const HeaderBlockComponent = ({ renderTop, navList }: IProps) => {
  return (
    <StyledHeaderBlock>
      <StyledHeaderTop>{renderTop}</StyledHeaderTop>
      <nav>
        <ul>
          {navList.map(({ title, path }) => (
            <li key={title}>
              <NavigationLink to={path}>{title}</NavigationLink>
            </li>
          ))}
        </ul>
      </nav>
    </StyledHeaderBlock>
  );
};
