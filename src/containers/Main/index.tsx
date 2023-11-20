import { Benefits } from '../Benefits';
import { ProductsCategories } from '../ProductCategories';
import { Globally } from '../Globally';
import { Br } from '../../ui-kit/Br';
import { About } from '../About';

export const Main = () => {
  return (
    <div>
      <Benefits />
      <Br desktop={120} mobile={60} />
      <About />
      <Br desktop={120} mobile={60} />
      <ProductsCategories />
      <Br desktop={120} mobile={60} />
      <Globally />
      <Br desktop={120} mobile={60} />
    </div>
  );
};
