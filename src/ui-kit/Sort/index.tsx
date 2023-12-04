import { useState } from 'react';
import type { MenuProps } from 'antd';

import { Wrapper, ArrowIcon, ItemWrapper } from './styles';
import { Text3Bold } from '../Typography';
import { MenuMore } from '../MenuMore';
import { IProps } from './types';

enum SORT_iTEMS {
  FEATURED = 'featured',
  PRICE_HIGH_LOW = 'рrice: high–low',
  PRICE_LOW_HIGH = 'рrice: low–high',
}

export const Sort = ({ setFilters }: IProps) => {
  const [sort, setSort] = useState<SORT_iTEMS | null>(null);
  const [open, setOpen] = useState(false);

  const handleSort = (sort: SORT_iTEMS | null) => {
    setSort(sort);

    // price can be "ASC" | "DESC" | "ALL"
    setFilters((prev) => ({ ...prev, sort: { price: 'ASC' } }));
  };

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
    <MenuMore
      items={[
        {
          key: 'all',
          label: (
            <ItemWrapper onClick={() => handleSort(null)}>
              <Text3Bold
                $case="uppercase"
                color={!sort ? 'unfocus' : 'primary'}
              >
                all
              </Text3Bold>
            </ItemWrapper>
          ),
        },
        ...items,
      ]}
      onOpenChange={onOpenChange}
    >
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
