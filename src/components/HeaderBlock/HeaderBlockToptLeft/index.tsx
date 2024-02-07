import { route } from '../../../constants/routes';
import { MainLink } from '../../../ui-kit/Links';
import { VerticalSeparator } from '../../../ui-kit/VerticalSeparator';
import { SearchBarComponent } from '../../SearchBar';
import { TextColor } from '../../../ui-kit/Typography/types';
import { useTranslation } from 'react-i18next';

interface IProps {
  color: TextColor;
}

export const HeaderBlockTopLeft: React.FC<IProps> = ({ color }) => {
  const { t } = useTranslation();

  return (
    <>
      <VerticalSeparator color={color}>
        <MainLink to={route.faq.path} color={color}>
          {t('header.help')}
        </MainLink>
      </VerticalSeparator>
      <SearchBarComponent color={color} />
    </>
  );
};
