import { useTranslation } from 'react-i18next';
import { links } from '../../constants/links';
import { paths, route } from '../../constants/routes';
import { IConstants, ILinkSocial } from './types';

export default function useStatic() {
  const { t } = useTranslation();
  const constants: IConstants = {
    'The Fun Stuff': [
      { title: 'Woman', path: route.gallery.get({ tag: paths.woman }) },
      { title: 'Man', path: route.gallery.get({ tag: paths.man }) },
      { title: 'Kids', path: route.gallery.get({ tag: paths.kids }) },
      { title: 'Sale', path: route.gallery.get({ tag: paths.sale }) },
      {
        title: 'Souvenirs',
        path: route.gallery.get({ tag: paths.souvenirs }),
      },
      { title: 'New', path: route.gallery.get({ tag: paths.new }) },
    ],
    'Things to Know': [
      { title: t('footer.My account'), path: route.myAccount.path },
      { title: t('footer.My orders'), path: route.myOrders.path },
      { title: t('footer.Contact'), path: route.contact.path },
      { title: 'FAQ', path: route.faq.path },
    ],
    'Legal Note': [
      { title: t('footer.Privacy Policy'), path: route.privacyPolicy.path },
      { title: t('footer.Terms of Service'), path: route.termsOfService.path },
      {
        title: t('footer.Registered company'),
        href: links.REGISTERED_COMPANY,
      },
      { title: t('footer.Refund policy'), path: route.refundPolicy.path },
    ],
  };
  const socialLinks: ILinkSocial[] = [
    {
      title: 'INSTAGRAM',
      path: links.INSTAGRAMM,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      title: 'FACEBOOK',
      path: links.FACEBOOK,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      title: 'PINTEREST',
      path: links.PINTEREST,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ];

  return { constants, socialLinks };
}
