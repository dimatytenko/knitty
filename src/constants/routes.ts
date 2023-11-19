import { Route } from '../helpers/Route';

export const route = {
  main: Route.of({ path: '/' }),
  woman: Route.of({ path: '/woman' }),
  man: Route.of({ path: '/man' }),
  kids: Route.of({ path: '/kids' }),
  sale: Route.of({ path: '/sale' }),
  souvenirs: Route.of({ path: '/souvenirs' }),
  new: Route.of({ path: '/new' }),
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
