import React from 'react';

import { IGoodsComponentProps } from './types';
import { Container } from '../Layout/styles';
import { GalleryController } from '..//GalleryController';
import { PageTitle } from '../PageTitle';
import { Text2Bold } from '../../ui-kit/Typography';
import { Pagination } from '../../ui-kit/Pagination';
import { PaginationWrapper } from './styles';
import { GalleryComponent } from '../Gallery';

export const Goods: React.FC<IGoodsComponentProps> = ({
  data,
  wrapper: Wrapper,
  renderItem,
  loading,
  setFilters,
  tag,
}) => {
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

      <GalleryComponent
        data={data}
        wrapper={Wrapper}
        renderItem={renderItem}
        loading={loading}
      />

      <PaginationWrapper>
        <Pagination total={data.length} defaultPageSize={8} />
      </PaginationWrapper>
    </Container>
  );
};
