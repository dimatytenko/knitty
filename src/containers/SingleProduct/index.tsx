import { useParams } from 'react-router-dom';
import { Container } from '../../components/Layout/styles';
import { Br } from '../../ui-kit/Br';
import { HowItsMade } from '../HowItsMade';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';
import { IProduct } from '../../types/api';
import { Recomended } from '../../components/Recomended';
import { ProductDetails } from '../../components/ProductDetails';
import { ProductDescription } from '../../components/ProductDescription';
import { ScrollButton } from '../../ui-kit/ScrollButton';
import { useGET } from '../../api/fetchApi';

export const SingleProduct = () => {
  const { id } = useParams();
  const {
    loading: singleProductLoading,
    data:  singleProduct ,
  } = useFetch({
    fetch: useGET({ endpoint: `products/${id}` }),
  });

   const {
     loading: listLoading,
     data: productList,
     setData: setProductList,
   } = useFetch({
     fetch: useGET({ endpoint: `products/` }),
   });
  


  return (
    <>
      <Container>
        {!singleProductLoading && singleProduct.length > 0 ? (
          <ProductDescription data={singleProduct[0]} />
        ) : (
          <h1>LOADING ...</h1>
        )}
        <Br desktop={120} mobile={60} />
        <ProductDetails />
        <Br desktop={120} mobile={60} />
        <HowItsMade />
        <Br desktop={120} mobile={60} />
        <Recomended
          loading={listLoading}
          data={productList.slice(0, 4)}
          setData={setProductList}
        />
        <Br desktop={100} mobile={60} />
      </Container>
      <ScrollButton />
    </>
  );
};
