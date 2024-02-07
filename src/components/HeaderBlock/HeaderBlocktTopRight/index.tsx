import { MainLink } from '../../../ui-kit/Links';
import { VerticalSeparator } from '../../../ui-kit/VerticalSeparator';
import { LangSwitcherComponent } from '../../LangSwitcher';
import { TextColor } from '../../../ui-kit/Typography/types';
import { route } from '../../../constants/routes';
import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';

interface IProps {
  color: TextColor;
}

export const HeaderBlockTopRight: React.FC<IProps> = ({ color }) => {
  const { t } = useTranslation();
  return (
    <>
      <VerticalSeparator color={color}>
        <LangSwitcherComponent color={color} />
      </VerticalSeparator>
      <VerticalSeparator color={color}>
        <MainLink to={route.signUp.path} color={color}>
          {t('header.signup')}
        </MainLink>
      </VerticalSeparator>
      <MainLink to={route.signIn.path} color={color}>
        {t('header.signin')}
      </MainLink>
    </>
  );
};
