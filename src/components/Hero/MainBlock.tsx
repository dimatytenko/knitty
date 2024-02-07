import { useTranslation } from 'react-i18next';
import { route, paths } from '../../constants/routes';
import { HeroLink } from '../../ui-kit/Links';
import { Text2Bold } from '../../ui-kit/Typography';
import { StyledMainBlock, StyledTitle } from './styles';

export const MainBlock = () => {
  const { t } = useTranslation();
  return (
    <StyledMainBlock>
      <Text2Bold $case="uppercase" color="background">
        {t('hero.preText')}
      </Text2Bold>
      <StyledTitle color="background">{t('hero.title')}</StyledTitle>
      <HeroLink to={route.gallery.get({ tag: paths.all })}>
        {t('common.btn')}
      </HeroLink>
    </StyledMainBlock>
  );
};
