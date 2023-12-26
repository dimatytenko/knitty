import { Benefits } from '../Benefits';
import { ProductsCategories } from '../ProductCategories';
import { Globally } from '../Globally';
import { Br } from '../../ui-kit/Br';
import { About } from '../About';
import { Hero } from '../Hero/Hero';
import { AllKnits } from '../AllKnits';
import { ScrollButton } from '../../ui-kit/ScrollButton';
import { useFetch } from '../../hooks/useFetch';
import { useGET } from '../../api/fetchApi';
import { MainLoader } from '../../ui-kit/Loader/MainLoader';

export const Main = () => {
  const {
    globalState: { filters },
    loading,
  } = useFetch({
    fetch: useGET({ endpoint: `filters/` }),
    globalStateKey: 'filters',
    cache: true,
  });


  return (
    <div>
      <Hero />
      <Br desktop={80} mobile={50} />
      <Benefits />
      <Br desktop={80} mobile={50} />
      <AllKnits />
      <Br desktop={120} mobile={85} />
      <About />
      <Br desktop={120} mobile={80} />
      {loading ? <MainLoader /> : <ProductsCategories filters={filters} />}
      <Br desktop={120} mobile={80} />
      <Globally />
      <Br desktop={120} mobile={80} />
      <ScrollButton />
    </div>
  );
};
