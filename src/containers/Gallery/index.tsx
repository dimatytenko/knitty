import { useContext } from 'react';
import { GalleryComponent } from '../../components/Gallery';
import { Container } from '../../components/Layout/styles';
import { GlobalStore } from '../../context/GlobalStore';
import { useFilters } from '../../hooks/useFilters';
import { StyledGalleryWrapper } from '../../styles/container';
import { ProductCard } from '../../ui-kit/Card/Product';
import { Br } from '../../ui-kit/Br';
import { PageTitle } from '../../components/PageTitle';
import { Text2Bold } from '../../ui-kit/Typography';
import { GalleryController } from '../../components/GalleryController';

export const Gallery = () => {
  const { data, setData, loading } = useContext(GlobalStore)!;
  const { filters, setFilters } = useFilters();
  console.log('filter', filters);

  return (
    <Container>
      <Br desktop={120} mobile={60} />
      <PageTitle
        title="Shop all"
        text={
          <Text2Bold $case="uppercase" color="unfocus" $width={488}>
            Explore our curated collection of artisanal knitwear from around the
            world. From cozy sweaters to stylish scarves, each piece is
            meticulously crafted by talented artisans
          </Text2Bold>
        }
        list={data}
      />
      <GalleryController setFilters={setFilters} />

      <GalleryComponent
        loading={loading}
        data={data}
        wrapper={StyledGalleryWrapper}
        renderItem={(el) => <ProductCard {...el} setData={setData} />}
      />
      <Br desktop={100} mobile={60} />
    </Container>
  );
};
