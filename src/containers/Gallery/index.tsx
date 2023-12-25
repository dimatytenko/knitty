import { useParams } from 'react-router-dom';

import { Goods } from '../../components/Goods';
import { StyledGalleryWrapper } from '../../styles/container';
import { ProductCard } from '../../ui-kit/Card/Product';
import { Br } from '../../ui-kit/Br';
import { useFetch } from '../../hooks/useFetch';
import { useGET } from '../../api/fetchApi';

export const Gallery = () => {
  const { tag } = useParams();

  const { data, loading, setData } = useFetch({
    fetch: useGET({ endpoint: `products/?category=${1}` }),
    globalStateKey: tag,
  });

  return (
    <>
      <Br desktop={120} mobile={60} />

      <Goods
        loading={loading}
        data={data}
        wrapper={StyledGalleryWrapper}
        renderItem={(el) => <ProductCard {...el} setData={setData} />}
        tag={tag}
      />

      <Br desktop={100} mobile={60} />
    </>
  );
};
