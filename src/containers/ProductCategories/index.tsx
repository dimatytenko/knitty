import { Container } from '../../components/Layout/styles';
import { ProductsCategoriesComponent } from '../../components/ProductsCategories';
// import { categories } from './constants';
// import { filters } from '../../constants/routes';
import { IProps } from './types';
// const categories = filters.map((title) => ({
//   title,
//   path: `gallery/all?filter=${title}`,
// }));

export const ProductsCategories = ({ filters }: IProps) => {
  const categories = filters.map(({ name, ...rest }) => ({
    title: name,
    path: `gallery/all?filter=${name.toLowerCase()}`,
    ...rest
  }));
  return (
    <Container>
      <ProductsCategoriesComponent
        list={categories.filter((item) => item.title !== 'all')}
      />
    </Container>
  );
};
