import { useTranslation } from 'react-i18next';

export default function useStatic() {
  const { t } = useTranslation();
  const data = {
    title: t('refundPolicy.title'),
    subtitle: t('refundPolicy.subtitle'),
    info: [
      {
        titleBlock: '',
        text: [
          t('refundPolicy.text.0'),
          t('refundPolicy.text.1'),
          t('refundPolicy.text.2'),
        ],
      },
    ],
  };

  return { data };
}
