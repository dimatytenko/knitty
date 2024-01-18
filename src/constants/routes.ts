import { Route } from '../helpers/Route';

export const route = {
  main: Route.of({ path: '/' }),
  gallery: Route.of<{ tag?: string }>({ path: '/gallery/:tag' }),
  singleProduct: Route.of<{ id?: string }>({ path: '/gallery/product/:id' }),

  myAccount: Route.of({ path: '/my-account' }),
  myOrders: Route.of({ path: '/my-orders' }),
  contact: Route.of({ path: '/contact' }),
  faq: Route.of({ path: '/faq' }),

  privacyPolicy: Route.of({ path: '/privacy-policy' }),
  termsOfService: Route.of({ path: '/terms-of-service' }),
  registredCompany: Route.of({ path: '/registered-company' }),
  refundPolicy: Route.of({ path: '/refund-policy' }),
  signIn: Route.of({ path: '/auth/sign-in' }),
  signUp: Route.of({ path: '/auth/sign-up' }),
  forgot: Route.of({ path: '/auth/forgot' }),

  uikit: Route.of({ path: '/ui-kit' }),
};

export const paths = {
  main: '',
  gallery: 'gallery',
  all: 'all',
  woman: 'woman',
  man: 'man',
  kids: 'kids',
  sale: 'sale',
  souvenirs: 'souvenirs',
  new: 'new',

  myAccount: 'my-account',
  myOrders: 'my-orders',
  contact: 'contact',
  faq: 'faq',

  privacyPolicy: 'privacy-policy',
  termsOfService: 'terms-of-service',
  registredCompany: 'registered-company',
  refundPolicy: 'refund-policy',
};

export const excludePathsFooter = [paths.contact];
export const excludePathsHeader = [];

export const filters = [
  'all',
  'sweaters',
  'blanket',
  'gloves',
  'socks',
  'scarves',
  'caps',
  'jackets',
  'other',
];
