import { useTranslation } from 'react-i18next';

export default function useStatic() {
  const { t } = useTranslation();
  const data = {
    title: t('privacyPolicy.title'),
    subtitle: t('privacyPolicy.subtitle'),
    info: [
      {
        titleBlock: t(
          'privacyPolicy.titleBlock.PERSONAL INFORMATION WE COLLECT',
        ),
        text: [
          t('privacyPolicy.text.PERSONAL INFORMATION WE COLLECT.0'),
          t('privacyPolicy.text.PERSONAL INFORMATION WE COLLECT.1'),
          t('privacyPolicy.text.PERSONAL INFORMATION WE COLLECT.2'),
          t('privacyPolicy.text.PERSONAL INFORMATION WE COLLECT.3'),
        ],
      },
      {
        titleBlock: t(
          'privacyPolicy.titleBlock.HOW DO WE USE YOUR PERSONAL INFORMATION?',
        ),
        text: [
          t('privacyPolicy.text.HOW DO WE USE YOUR PERSONAL INFORMATION?.0'),
          t('privacyPolicy.text.HOW DO WE USE YOUR PERSONAL INFORMATION?.1'),
        ],
      },
      {
        titleBlock: t(
          'privacyPolicy.titleBlock.SHARING YOUR PERSONAL INFORMATION',
        ),
        text: [
          t('privacyPolicy.text.SHARING YOUR PERSONAL INFORMATION.0'),
          t('privacyPolicy.text.SHARING YOUR PERSONAL INFORMATION.1'),
        ],
      },
      {
        titleBlock: t('privacyPolicy.titleBlock.BEHAVIOURAL ADVERTISING'),
        text: [
          t('privacyPolicy.text.BEHAVIOURAL ADVERTISING.0'),
          t('privacyPolicy.text.BEHAVIOURAL ADVERTISING.1'),
          t('privacyPolicy.text.BEHAVIOURAL ADVERTISING.2'),
        ],
      },
      {
        titleBlock: t('privacyPolicy.titleBlock.DO NOT TRACK'),
        text: [t('privacyPolicy.text.DO NOT TRACK.0')],
      },
      {
        titleBlock: t('privacyPolicy.titleBlock.YOUR RIGHTS'),
        text: [
          t('privacyPolicy.text.YOUR RIGHTS.0'),
          t('privacyPolicy.text.YOUR RIGHTS.1'),
        ],
      },
    ],
  };

  return { data };
}
