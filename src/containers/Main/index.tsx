import { Benefits } from '../Benefits';
import { ProductsCategories } from '../ProductCategories';
import { Globally } from '../Globally';
import { Br } from '../../ui-kit/Br';
import { About } from '../About';
import { Hero } from '../Hero/Hero';
import { KnittsGallery } from '../KnittsGallery';
export const Main = () => {
  return (
    <div>
      <Hero />
      <Br desktop={120} mobile={60} />
      <Benefits />
      <Br desktop={120} mobile={60} />
< KnittsGallery />
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
