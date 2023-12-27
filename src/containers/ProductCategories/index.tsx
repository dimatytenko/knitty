import { Container } from '../../components/Layout/styles';
import { ProductsCategoriesComponent } from '../../components/ProductsCategories';
import { IProps } from './types';

export const ProductsCategories = ({ filters }: IProps) => {
  return (
    <Container>
      <ProductsCategoriesComponent
        list={filters.filter(({name}) => name.toLowerCase() !== 'all')}
      />
    </Container>
  );
};
