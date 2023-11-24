import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { route } from './constants/routes';
import { Main } from './containers/Main';
import { Uikit } from './containers/Uikit';
import { Woman } from './containers/Woman';
import { Kids } from './containers/Kids';
import { Souvenirs } from './containers/Souvenirs';
import { New } from './containers/New';
import { Man } from './containers/Man';
import { Sale } from './containers/Sale';

const NotFound = lazy(() => import('./containers/NotFound'));

const PublicRoutes = [
  <Route key="main" path={route.main.path} element={<Main />} />,
  <Route key="woman" path={route.woman.path} element={<Woman />} />,
  <Route key="man" path={route.man.path} element={<Man />} />,
  <Route key="kids" path={route.kids.path} element={<Kids />} />,
  <Route key="kids" path={route.sale.path} element={<Sale />} />,
  <Route key="souvenirs" path={route.souvenirs.path} element={<Souvenirs />} />,
  <Route key="souvenirs" path={route.new.path} element={<New />} />,
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
