import { useParams } from 'react-router-dom';
import { Container } from '../../components/Layout/styles';
import { Br } from '../../ui-kit/Br';
import { HowItsMade } from '../HowItsMade';
import CollapseComponent from '../../components/Collapse';
import { list } from './utils';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';
import { IProduct } from '../../types/api';
import { Recomended } from '../../components/Recomended';
import {ProductDetails} from '../../components/ProductDetails'

export const SingleProduct = () => {
  const [data, setData] = useState<IProduct[] | []>([]);
  const { id } = useParams();

  const { loading } = useFetch({
    endpoint: `baseURL/api/products/${id}`,
    setData,
    noFetching: false,
  });

  return (
    <Container>
      {loading ? (
        <h1>LOADING ...</h1>
      ) : (
        <div>
          SINGLE PRODUCT <span style={{ color: 'red' }}>{id}</span>
        </div>
      )}
      <Br desktop={120} mobile={60} />
      <ProductDetails/>
      <Br desktop={120} mobile={60} />
      <CollapseComponent list={list} />
      <Br desktop={120} mobile={60} />
      <HowItsMade />
      <Br desktop={120} mobile={60} />
      <Recomended loading={loading} data={data.slice(0, 4)} setData={setData} />
      <Br desktop={100} mobile={60} />
    </Container>
  );
};
