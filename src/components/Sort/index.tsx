import { useState } from 'react';
import { DropDown } from '../../ui-kit/DropDown';

// enum SORT_iTEMS {
//   FEATURED = 'featured',
//   PRICE_HIGH_LOW = 'рrice: high–low',
//   PRICE_LOW_HIGH = 'рrice: low–high',
// }

const itemsList = [
  { label: 'featured', value: 'ALL' },
  { label: 'рrice: high–low', value: 'DESC' },
  { label: 'рrice: low–high', value: 'ASC' },
];

export const Sort = () => {
  const [sort, setSort] = useState(itemsList[0]);

  return (
    <DropDown
      list={itemsList}
      title="sort by: "
      value={sort.label}
      setter={(item) => setSort(item)}
    />
  );
};
