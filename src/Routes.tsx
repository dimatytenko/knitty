import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { route } from './constants/routes';
import { Main } from './containers/Main';
import { Uikit } from './containers/Uikit';
import { Faq } from './containers/FAQ';
import { Gallery } from './containers/Gallery';
import { Contacts } from './containers/Contacts';
import { SingleProduct } from './containers/SingleProduct';

const NotFound = lazy(() => import('./containers/NotFound'));

const PublicRoutes = [
  <Route key="main" path={route.main.path} element={<Main />} />,
  <Route key="gallery" path={route.gallery.path} element={<Gallery />} />,
  <Route
    key="single-product"
    path={route.singleProduct.path}
    element={<SingleProduct />}
  />,
  <Route key="faq" path={route.faq.path} element={<Faq />} />,
  <Route key="contact" path={route.contact.path} element={<Contacts />} />,
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
