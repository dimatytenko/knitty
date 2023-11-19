import { Benefits } from '../Benefits';
import { ProductsCategories } from '../ProductCategories';
import { Globally } from '../Globally';
import { Br } from '../../ui-kit/Br';

export const Main = () => {
  return (
    <div>
      <Benefits />
      <ProductsCategories />
      <Br desktop={120} mobile={60} />
      <Globally />
      <Br desktop={120} mobile={60} />
    </div>
  );
};
