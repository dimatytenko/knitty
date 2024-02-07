import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';

import App from './App.tsx';
import { BASE_URL } from './api/baseUrl.ts';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './ui-kit/theme/theme.ts';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './styles/index.ts';
import { GlobalStroreProvider } from './context/GlobalStore/index.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './locales/i18n';


// fix height on mobile version
// source https://denis-creative.com/zadaem-razmer-100vh-bez-prokrutki-dlya-mobilnyh-ustrojstv/
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // {/* <React.StrictMode> */}
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <GlobalStroreProvider>
        {/* <FpjsProvider
          loadOptions={{
            apiKey: import.meta.env.VITE_FINGER_PRINT_KEY,
          }}
        > */}
        <GoogleOAuthProvider clientId="1001284759160-t08belp9vng164s2jm1o5balqdivvgfu.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
        {/* </FpjsProvider> */}
      </GlobalStroreProvider>
    </BrowserRouter>
    <Normalize />
    <GlobalStyles />
  </ThemeProvider>,
  // {/* </React.StrictMode> */}
);
