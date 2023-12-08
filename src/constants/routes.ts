import { Route } from '../helpers/Route';

export const route = {
  main: Route.of({ path: '/' }),
  gallery: Route.of<{ tag?: string }>({ path: '/gallery/:tag' }),
  singleProduct: Route.of<{ id?: string }>({ path: '/gallery/product/:id' }),
  contact: Route.of({ path: '/contact' }),
  myAccount: Route.of({ path: '/my-account' }),
  myOrders: Route.of({ path: '/my-orders' }),
  requestAReturn: Route.of({ path: '/request-a-return' }),
  shippingPolicy: Route.of({ path: '/shipping-policy' }),
  returnPolicy: Route.of({ path: '/return-policy' }),
  faq: Route.of({ path: '/faq' }),
  privacyPolicy: Route.of({ path: '/privacy-policy' }),
  termsOfService: Route.of({ path: '/terms-of-service' }),
  registredCompany: Route.of({ path: '/registered-company' }),

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
  contact: 'contact',
  myAccount: 'my-account',
  myOrders: 'my-orders',
  requestAReturn: 'request-a-return',
  shippingPolicy: 'shipping-policy',
  returnPolicy: 'return-policy',
  faq: 'faq',
  privacyPolicy: 'privacy-policy',
  termsOfService: 'terms-of-service',
  registredCompany: 'registered-company',
};

export const excludePathsFooter = [paths.contact];
export const excludePathsHeader = [];

export const filters = ['all', 'sweaters', 'blanket', 'gloves', 'socks'];
