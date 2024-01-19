import RoutesSwitch from './Routes';
import { Layout } from './containers/Layout';
import './ui-kit/fonts/fonts.css';
import './ui-kit/MenuMore/styles.css';
import 'swiper/css';
import 'swiper/css/navigation';

function App() {
  return (
      <Layout>
        <RoutesSwitch />
      </Layout>
  );
}

export default App;
