import { FooterComponent } from '../../../components/Layout/Footer';

export const Footer = () => {
  const year = new Date().getFullYear();

  return <FooterComponent year={year} />;
};
