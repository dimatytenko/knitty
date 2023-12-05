import { route } from '../../../constants/routes';
import { MainLink } from '../../../ui-kit/Links';
import { VerticalSeparator } from '../../../ui-kit/VerticalSeparator';
import { SearchBarComponent } from '../../SearchBar';
import { TextColor } from '../../../ui-kit/Typography/types';

interface IProps {
  color: TextColor;
}

export const HeaderBlockTopLeft: React.FC<IProps> = ({ color }) => {
  return (
    <>
      <VerticalSeparator color={color}>
        <MainLink to={route.faq.path} color={color}>
          Help
        </MainLink>
      </VerticalSeparator>
      <SearchBarComponent color={color} />
    </>
  );
};
