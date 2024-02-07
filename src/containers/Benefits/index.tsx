import { useTranslation } from 'react-i18next';
import { BenefitsComponent } from '../../components/Benefits';

export const Benefits = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      id: '1',
      title: t('benefits.ethically made in ukraine'),
    },
    {
      id: '2',
      title: t('benefits.natural yarns only'),
    },
    {
      id: '3',
      title: t('benefits.artisan craftsmanship'),
    },
    {
      id: '4',
      title: t('benefits.original patterns'),
    },
    {
      id: '5',
      title: t('benefits.cultural heritage'),
    },
    {
      id: '6',
      title: t('benefits.versatile fashion'),
    },
  ];

  return <BenefitsComponent benefits={benefits} />;
};
