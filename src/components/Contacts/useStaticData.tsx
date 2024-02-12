import { useTranslation } from 'react-i18next';

export default function useStaticData() {
  const { t } = useTranslation();

  const phones = [
    {
      title: t('contacts.Head Office'),
      body: '+ 1302-255-1030',
      path: 'tel:+13022551030',
    },
    {
      title: t('contacts.Sales Department'),
      body: '+ 1302-255-1031',
      path: 'tel:+13022551031',
    },
    {
      title: t('contacts.Press'),
      body: '+ 1302-255-1032',
      path: 'tel:+13022551032',
    },
  ];

  const emails = [
    {
      title: t('contacts.Advertising & PR'),
      body: 'pr@knitty.com',
      path: 'mailto:pr@knitty.com',
    },
    {
      title: t('contacts.Common Question'),
      body: 'pr@knitty.com',
      path: 'mailto:pr@knitty.com',
    },
    {
      title: t('contacts.Press'),
      body: 'pr@knitty.com',
      path: 'mailto:pr@knitty.com',
    },
  ];
  return { phones, emails };
}
