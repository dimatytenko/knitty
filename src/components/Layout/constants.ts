import { links } from '../../constants/links';
import { route } from '../../constants/routes';
import { IConstants, ILink, ILinkSocial } from './types';

export const constatnts: IConstants = {
  'The Fun Stuff': [
    { title: 'Woman', path: route.woman.path },
    { title: 'Man', path: route.man.path },
    { title: 'Kids', path: route.kids.path },
    { title: 'Souvenirs', path: route.souvenirs.path },
    { title: 'Sale', path: route.sale.path },
    { title: 'New', path: route.new.path },
  ],
  'Things to Know': [
    { title: 'My account', path: route.myAccount.path },
    { title: 'My orders', path: route.myOrders.path },
    { title: 'Request a return', path: route.requestAReturn.path },
    { title: 'Shipping Policy', path: route.shippingPolicy.path },
    { title: 'Return Policy', path: route.returnPolicy.path },
    { title: 'FAQ', path: route.faq.path },
  ],
  'Legal Note': [
    { title: 'Privacy Policy', path: route.privacyPolicy.path },
    { title: 'Terms of Service', path: route.termsOfService.path },
    { title: 'Registered company', path: route.registredCompany.path },
    { title: 'Shipping Policy', path: route.shippingPolicy.path },
    { title: 'Contact', path: route.contact.path },
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
  { title: 'Woman', path: route.woman.path },
  { title: 'Man', path: route.man.path },
  { title: 'Kids', path: route.kids.path },
  { title: 'Sale', path: route.sale.path },
];

export const listRight: ILink[] = [
  { title: 'Souvenirs', path: route.souvenirs.path },
  { title: 'New', path: route.new.path },
  { title: 'Contact', path: route.contact.path },
];
