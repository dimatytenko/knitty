import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';

import App from './App.tsx';
import { BASE_URL } from './api/baseUrl.ts';

// fix height on mobile version
// source https://denis-creative.com/zadaem-razmer-100vh-bez-prokrutki-dlya-mobilnyh-ustrojstv/
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FpjsProvider
    loadOptions={{
      apiKey: import.meta.env.VITE_FINGER_PRINT_KEY,
      // endpoint: BASE_URL + "test/"

    }}
  >
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </FpjsProvider>
);
