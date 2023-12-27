import { StyledGalleryWrapper } from '../../styles/container';
import { ProductCard } from '../../ui-kit/Card/Product';
import { Br } from '../../ui-kit/Br';
import { useFetch } from '../../hooks/useFetch';
import { useGET } from '../../api/fetchApi';
import { GlobalStore } from '../../context/GlobalStore';
import { useContext } from 'react';
import { IProps } from './types';
import { Container } from '../../ui-kit/Container';
import { PageTitle } from '../../components/PageTitle';
import { Text2Bold } from '../../ui-kit/Typography';
import { GalleryController } from '../../components/GalleryController';
import { GalleryComponent } from '../../components/Gallery';
import { PaginationWrapper } from '../../components/Goods/styles';
import { Pagination } from '../../ui-kit/Pagination';

export const Gallery = ({ route: { name, id } }: IProps) => {


  const {
    globalState: { globalFilters: {filter: activeFilter} },
  } = useContext(GlobalStore)!;


  const {
    globalState: { filters },
    loading: loadingFilters,
  } = useFetch({
    fetch: useGET({ endpoint: `filters/` }),
    globalStateKey: 'filters',
    cache: true,
  });

  const { data, loading, setData } = useFetch({
    fetch: useGET({
      endpoint: `products/?category=${id}&filter=${activeFilter}`,
    }),
  });

  return (
    <>
      <Container>
        <Br desktop={120} mobile={60} />
        <PageTitle
          title={`Shop ${name}`}
          text={
            <Text2Bold $case="uppercase" color="unfocus" $width={488}>
              Explore our curated collection of artisanal knitwear from around
              the world. From cozy sweaters to stylish scarves, each piece is
              meticulously crafted by talented artisans
            </Text2Bold>
          }
          list={data}
        />
        <GalleryController
          activeFilter={activeFilter}
          filters={filters}
          loading={loadingFilters}
        />

        <GalleryComponent
          data={data}
          wrapper={StyledGalleryWrapper}
          renderItem={(el) => <ProductCard {...el} setData={setData} />}
          loading={loading}
        />

        <PaginationWrapper>
          <Pagination total={data.length} defaultPageSize={8} />
        </PaginationWrapper>
        <Br desktop={100} mobile={60} />
      </Container>
      {/*

      <Goods
        loading={loading}
        data={data}
        wrapper={StyledGalleryWrapper}
        renderItem={(el) => <ProductCard {...el} setData={setData} />}
        tag={'woman'}
      />

       */}
    </>
  );
};
