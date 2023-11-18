import { Container } from '../../components/Layout/styles';
import { ProductsCategoriesComponent } from '../../components/ProductsCategories';
import { categories } from './constants';

export const ProductsCategories = () => {
  return (
    <Container>
      <ProductsCategoriesComponent list={categories} />
    </Container>
  );
};
