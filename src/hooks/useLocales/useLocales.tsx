import { useTranslation } from 'react-i18next';

export default function useLocales() {
  const { t } = useTranslation();

  return { t };
}
