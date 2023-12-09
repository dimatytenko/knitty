import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { route } from './constants/routes';
import { Main } from './containers/Main';
import { Uikit } from './containers/Uikit';
import { Gallery } from './containers/Gallery';
import { SingleProduct } from './containers/SingleProduct';

import { Contacts } from './containers/Static/Contacts';
import { Faq } from './containers/Static/FAQ';

import { PrivacyPolicy } from './containers/Static/PrivacyPolicy';
import { TermsOfService } from './containers/Static/TermsOfService';
import { PefundPolicy } from './containers/Static/RefundPolicy';

const NotFound = lazy(() => import('./containers/NotFound'));

const PublicRoutes = [
  <Route key="main" path={route.main.path} element={<Main />} />,
  <Route key="gallery" path={route.gallery.path} element={<Gallery />} />,
  <Route
    key="single-product"
    path={route.singleProduct.path}
    element={<SingleProduct />}
  />,

  <Route key="contact" path={route.contact.path} element={<Contacts />} />,
  <Route key="faq" path={route.faq.path} element={<Faq />} />,

  <Route
    key="privacy-policy"
    path={route.privacyPolicy.path}
    element={<PrivacyPolicy />}
  />,
  <Route
    key="terms-of-service"
    path={route.termsOfService.path}
    element={<TermsOfService />}
  />,
  <Route
    key="refund-policy"
    path={route.refundPolicy.path}
    element={<PefundPolicy />}
  />,
];

// only for development
const UikitRoutes = [
  <Route key="uikit" path={route.uikit.path} element={<Uikit />} />,
];

const RoutesSwitch = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        {UikitRoutes}
        {PublicRoutes}
        {/* {PrivateRoutes} */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesSwitch;
