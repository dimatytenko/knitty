import { useState } from 'react';
import { StyledLangSwitcherWrapper, StyledText } from './styles';
import { TextColor } from '../../ui-kit/Typography/types';
import { useTranslation } from 'react-i18next';

interface IProps {
  color: TextColor;
}

export const LangSwitcherComponent: React.FC<IProps> = ({ color }) => {
  const lng = ['ua', 'en'];

  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState<number>(
    i18n.language === lng[1] ? 1 : 0,
  );

  const onClick = (idx: number) => {
    setActiveLang(idx);
    i18n.changeLanguage(lng[idx]);
  };

  return (
    <StyledLangSwitcherWrapper>
      <button
        className={activeLang !== 0 ? 'inAactive' : undefined}
        type="button"
        onClick={() => onClick(0)}
      >
        <StyledText color={color}>{t('header.ukr')}</StyledText>
      </button>
      <button
        className={activeLang !== 1 ? 'inAactive' : undefined}
        type="button"
        onClick={() => onClick(1)}
      >
        <StyledText color={color}>{t('header.eng')}</StyledText>
      </button>
    </StyledLangSwitcherWrapper>
  );
};
