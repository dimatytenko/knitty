/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import type { MenuProps } from 'antd';
import { useSearchParams } from 'react-router-dom';

import { Wrapper, ArrowIcon, ItemWrapper } from './styles';
import { Text3Bold } from '../Typography';
import { MenuMore } from '../MenuMore';

enum SORT_iTEMS {
  FEATURED = 'featured',
  PRICE_HIGH_LOW = 'рrice: high–low',
  PRICE_LOW_HIGH = 'рrice: low–high',
}

export const Sort = () => {
  const [sort, setSort] = useState<SORT_iTEMS>(SORT_iTEMS.FEATURED);
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = (sort: SORT_iTEMS) => {
    setSort(sort);
  };

  useEffect(() => {
    const newSearchParams: {
      [key: string]: string;
    } = {};
    searchParams.forEach((value, key) => {
      newSearchParams[key] = value;
    });

    setSearchParams({
      ...newSearchParams,
      sort: sort,
    });
  }, [sort, searchParams, setSearchParams]);

  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const items: MenuProps['items'] = (
    Object.keys(SORT_iTEMS) as Array<keyof typeof SORT_iTEMS>
  ).map((item) => ({
    key: item,
    label: (
      <ItemWrapper onClick={() => handleSort(SORT_iTEMS[item])}>
        <Text3Bold
          $case="uppercase"
          color={SORT_iTEMS[item] === sort ? 'unfocus' : 'primary'}
        >
          {SORT_iTEMS[item]}
        </Text3Bold>
      </ItemWrapper>
    ),
  }));

  return (
    <MenuMore items={items} onOpenChange={onOpenChange}>
      <Wrapper>
        <Text3Bold $case="uppercase">sort by:</Text3Bold>
        {sort && (
          <Text3Bold $case="uppercase" color="unfocus">
            {sort}
          </Text3Bold>
        )}
        <ArrowIcon $open={open} />
      </Wrapper>
    </MenuMore>
  );
};
