import React from 'react';

import { NoItems } from './NoItems';
import { IGalleryComponentProps } from './types';
import { Container } from '../Layout/styles';
import { GalleryController } from '..//GalleryController';
import { PageTitle } from '../PageTitle';
import { Text2Bold } from '../../ui-kit/Typography';
import { Pagination } from '../../ui-kit/Pagination';
import { PaginationWrapper } from './styles';

export const GalleryComponent: React.FC<IGalleryComponentProps> = ({
  data,
  wrapper: Wrapper,
  renderItem,
  loading,
  setFilters,
  tag,
}) => {
  if (loading) return <div>Loading...</div>;
  if (!data.length) return <NoItems />;
  console.log('data', data);

  return (
    <Container>
      <PageTitle
        title={`Shop ${tag}`}
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

      <Wrapper>
        {data.map((el) => (
          <li key={el.id}>{renderItem(el)}</li>
        ))}
      </Wrapper>
      <PaginationWrapper>
        <Pagination total={data.length} defaultPageSize={8} />
      </PaginationWrapper>
    </Container>
  );
};
