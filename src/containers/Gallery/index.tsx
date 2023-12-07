import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Goods } from '../../components/Goods';
import { GlobalStore } from '../../context/GlobalStore';
import { StyledGalleryWrapper } from '../../styles/container';
import { ProductCard } from '../../ui-kit/Card/Product';
import { Br } from '../../ui-kit/Br';

export const Gallery = () => {
  const { tag } = useParams();
  const { data, setData, loading } = useContext(GlobalStore)!;

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
