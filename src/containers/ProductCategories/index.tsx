import { Container } from '../../components/Layout/styles';
import { ProductsCategoriesComponent } from '../../components/ProductsCategories';
// import { categories } from './constants';
import { filters } from '../../constants/routes';
const categories = filters.map((title) => ({
  title,
  path: `gallery/all?filter=${title}`,
}));

export const ProductsCategories = () => {
  return (
    <Container>
      <ProductsCategoriesComponent
        list={categories.filter((item) => item.title !== 'all')}
      />
    </Container>
  );
};
