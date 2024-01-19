import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { route } from './constants/routes';
import { Uikit } from './containers/Uikit';
import { useFetch } from './hooks/useFetch';
import { useGET } from './api/fetchApi';
import { MainLoader } from './ui-kit/Loader/MainLoader';
import { CategoriesType } from './context/GlobalStore/types';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import ForgotPswrd from './components/Auth/ForgotPswrd';

const NotFound = lazy(() => import('./containers/NotFound'));
const Main = lazy(() => import('./containers/Main'));
const SingleProduct = lazy(() => import('./containers/SingleProduct'));
const Contacts = lazy(() => import('./containers/Static/Contacts'));
const Faq = lazy(() => import('./containers/Static/FAQ'));
const PrivacyPolicy = lazy(() => import('./containers/Static/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./containers/Static/TermsOfService'));
const RefundPolicy = lazy(() => import('./containers/Static/RefundPolicy'));
const Gallery = lazy(() => import('./containers/Gallery'));
const Auth = lazy(() => import('./containers/Auth'));


const PublicRoutes = [
  <Route key="main" path={route.main.path} element={<Main />} />,
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
    element={<RefundPolicy />}
  />,
  <Route
    key="sign-in"
    path={route.signIn.path}
    element={
      <Auth>
        <SignIn />
      </Auth>
    }
  />,
  <Route
    key="sign-up"
    path={route.signUp.path}
    element={
      <Auth>
        <SignUp />
      </Auth>
    }
  />,
  <Route
    key="forgot"
    path={route.forgot.path}
    element={
      <Auth>
        <ForgotPswrd />
      </Auth>
    }
  />,
];

// only for development
const UikitRoutes = [
  <Route key="uikit" path={route.uikit.path} element={<Uikit />} />,
];

const RoutesSwitch = () => {
  const {
    loading,
    globalState: { categories },
  } = useFetch({
    fetch: useGET({ endpoint: 'categories/' }),
    globalStateKey: 'categories',
    cache: true,
  });

  const routes = categories.map(({ name, id }: CategoriesType) => (
    <Route
      key={name}
      path={`/gallery/${name.toLowerCase()}`}
      element={<Gallery route={{ name: name.toLowerCase(), id }} />}
    />
  ));

  return (
    <>
      {loading ? (
        <MainLoader />
      ) : (
        <Suspense fallback={<MainLoader />}>
          <Routes>
            {UikitRoutes}
            {[...routes, ...PublicRoutes]}
            {/* {PrivateRoutes} */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default RoutesSwitch;
