import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { route } from './constants/routes';
import { Main } from './containers/Main';
import { Uikit } from './containers/Uikit';

const NotFound = lazy(() => import('./containers/NotFound'));

const PublicRoutes = [
  <Route key="main" path={route.main.path} element={<Main />} />,
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
