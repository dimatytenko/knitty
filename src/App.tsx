import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import RoutesSwitch from './Routes';
import { GlobalStyles } from './styles';
import { Layout } from './containers/Layout';
import { defaultTheme } from './ui-kit/theme/theme';
import { GlobalStroreProvider } from './context/GlobalStore';
import './ui-kit/fonts/fonts.css';
import './ui-kit/MenuMore/styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';

function App() {
  const { isLoading, error, data } = useVisitorData();

  if (isLoading || !data) return <div> Finger Print loading...</div>;
  console.log('VISITOR , dont remove this conlose.log', {
    visitorId: data?.visitorId,
  });
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStroreProvider>
        <Layout>
          <RoutesSwitch />
        </Layout>
      </GlobalStroreProvider>
      <Normalize />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
