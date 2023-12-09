import { links } from '../../constants/links';
import { route, paths } from '../../constants/routes';
import { IConstants, ILink, ILinkSocial } from './types';

export const constants: IConstants = {
  'The Fun Stuff': [
    { title: 'Woman', path: route.gallery.get({ tag: paths.woman }) },
    { title: 'Man', path: route.gallery.get({ tag: paths.man }) },
    { title: 'Kids', path: route.gallery.get({ tag: paths.kids }) },
    { title: 'Sale', path: route.gallery.get({ tag: paths.sale }) },
    { title: 'Souvenirs', path: route.gallery.get({ tag: paths.souvenirs }) },
    { title: 'New', path: route.gallery.get({ tag: paths.new }) },
  ],
  'Things to Know': [
    { title: 'My account', path: route.myAccount.path },
    { title: 'My orders', path: route.myOrders.path },
    { title: 'Contact', path: route.contact.path },
    { title: 'FAQ', path: route.faq.path },
  ],
  'Legal Note': [
    { title: 'Privacy Policy', path: route.privacyPolicy.path },
    { title: 'Terms of Service', path: route.termsOfService.path },
    {
      title: 'Registered company',
      href: links.REGISTERED_COMPANY,
    },
    { title: 'Refund policy', path: route.refundPolicy.path },
  ],
};

export const socialLinks: ILinkSocial[] = [
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

export const listLeft: ILink[] = [
  { title: 'Woman', path: route.gallery.get({ tag: paths.woman }) },
  { title: 'Man', path: route.gallery.get({ tag: paths.man }) },
  { title: 'Kids', path: route.gallery.get({ tag: paths.kids }) },
  { title: 'Sale', path: route.gallery.get({ tag: paths.sale }) },
];

export const listRight: ILink[] = [
  { title: 'Souvenirs', path: route.gallery.get({ tag: paths.souvenirs }) },
  { title: 'New', path: route.gallery.get({ tag: paths.new }) },
];
