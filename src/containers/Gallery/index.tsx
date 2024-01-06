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
import { genereteQueryParams } from './helper';
import { useMedia } from 'use-media';

export const Gallery = ({ route: { name, id } }: IProps) => {
  const isDesktop = useMedia({ minWidth: '900px' });

  const {
    globalState: {
      globalFilters: {
        filter: activeFilter,
        page: pageFilter,
        pageSize: pageSizeFilter,
        ordering: orderingFilter,
      },
    },
    globalSetter
  } = useContext(GlobalStore)!;

  const {
    globalState: { filters },
    loading: loadingFilters,
  } = useFetch({
    fetch: useGET({ endpoint: `filters/` }),
    globalStateKey: 'filters',
    cache: true,
  });

  const { data, loading } = useFetch({
    fetch: useGET({
      endpoint:
        `products/?` +
        genereteQueryParams({
          id,
          activeFilter,
          pageFilter,
          pageSizeFilter,
          orderingFilter,
        }),
    }),
  });

  return (
    <Container style={{ paddingTop: isDesktop ? '120px' : '140px' }}>
      <PageTitle
        title={`Shop ${name}`}
        text={
          <Text2Bold $case="uppercase" color="unfocus" $width={488}>
            Explore our curated collection of artisanal knitwear from around the
            world. From cozy sweaters to stylish scarves, each piece is
            meticulously crafted by talented artisans
          </Text2Bold>
        }
        count={data?.count || 0}
      />
      <GalleryController
        activeFilter={activeFilter}
        filters={filters}
        loading={loadingFilters}
      />

      <GalleryComponent
        data={data?.results || []}
        wrapper={StyledGalleryWrapper}
        renderItem={(el) => <ProductCard {...el} setData={globalSetter} />}
        loading={loading}
      />

      <PaginationWrapper>
        <Pagination total={data?.count || 0} />
      </PaginationWrapper>
      <Br desktop={100} mobile={60} />
    </Container>
  );
};
