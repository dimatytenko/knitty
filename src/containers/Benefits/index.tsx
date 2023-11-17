import { BenefitsComponent } from '../../components/Benefits';

const benefits = [
  {
    id: '1',
    title: 'ethically made in ukraine',
  },
  {
    id: '2',
    title: 'natural yarns only',
  },
  {
    id: '3',
    title: 'artisan craftsmanship',
  },
  {
    id: '4',
    title: 'original patterns',
  },
  {
    id: '5',
    title: 'cultural heritage',
  },
  {
    id: '6',
    title: 'versatile fashion',
  },
];

export const Benefits = () => {
  return <BenefitsComponent benefits={benefits} />;
};
