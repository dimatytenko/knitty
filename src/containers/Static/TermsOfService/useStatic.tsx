import { useTranslation } from 'react-i18next';

export default function useStatic() {
  const { t } = useTranslation();

  const data = {
    title: t('termsOfService.title'),
    subtitle: t('termsOfService.subtitle'),
    info: [
      {
        titleBlock: t('termsOfService.titleBlock.overview'),
        text: [
          t('termsOfService.text.overview.0'),
          t('termsOfService.text.overview.1'),
          t('termsOfService.text.overview.2'),
          t('termsOfService.text.overview.3'),
          t('termsOfService.text.overview.4'),
        ],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section1'),
        text: [t('termsOfService.text.section1.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section2'),
        text: [t('termsOfService.text.section2.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section3'),
        text: [t('termsOfService.text.section3.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section4'),
        text: [t('termsOfService.text.section4.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section5'),
        text: [t('termsOfService.text.section5.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section6'),
        text: [
          t('termsOfService.text.section6.0'),
          t('termsOfService.text.section6.1'),
        ],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section7'),
        text: [t('termsOfService.text.section7.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section8'),
        text: [t('termsOfService.text.section8.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section9'),
        text: [t('termsOfService.text.section9.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section10'),
        text: [t('termsOfService.text.section10.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section11'),
        text: [t('termsOfService.text.section11.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section12'),
        text: [t('termsOfService.text.section12.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section13'),
        text: [t('termsOfService.text.section13.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section14'),
        text: [t('termsOfService.text.section14.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section15'),
        text: [t('termsOfService.text.section15.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section16'),
        text: [t('termsOfService.text.section16.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section17'),
        text: [t('termsOfService.text.section17.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section18'),
        text: [
          t('termsOfService.text.section18.0'),
          t('termsOfService.text.section18.1'),
          t('termsOfService.text.section18.2'),
          t('termsOfService.text.section18.3'),
          t('termsOfService.text.section18.4'),
        ],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section19'),
        text: [t('termsOfService.text.section19.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section20'),
        text: [t('termsOfService.text.section20.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section21'),
        text: [t('termsOfService.text.section21.0')],
      },
      {
        titleBlock: t('termsOfService.titleBlock.section22'),
        text: [t('termsOfService.text.section22.0')],
      },
    ],
  };

  return { data };
}
