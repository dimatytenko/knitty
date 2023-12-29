import { useContext, useState } from 'react';
import { DropDown } from '../../ui-kit/DropDown';
import { IProps } from './types';
import { GlobalStore } from '../../context/GlobalStore';

// enum SORT_iTEMS {
//   FEATURED = 'featured',
//   PRICE_HIGH_LOW = 'рrice: high–low',
//   PRICE_LOW_HIGH = 'рrice: low–high',
// }

const itemsList = [
  { label: 'featured', value:null },
  { label: 'рrice: high–low', value: '-price' },
  { label: 'рrice: low–high', value: 'price' },
];

export const Sort = () => {
  const [sort, setSort] = useState(itemsList[0]);
  const { globalSetter } = useContext(GlobalStore)!;

  return (
    <DropDown
      list={itemsList}
      title="sort by: "
      value={sort.label}
      setter={(item) => {
        setSort(item);
        globalSetter((prev) => {
          prev.globalFilters.ordering = item.value;
          return { ...prev };
        });
      }}
    />
  );
};
