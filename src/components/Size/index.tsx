import { useState } from 'react';
import { DropDown } from '../../ui-kit/DropDown';

const itemsList = [
  { label: '', value: '' },
  { label: 'M', value: 'm' },
  { label: 'S', value: 's' },
  { label: 'XXL', value: 'xxl' },
];

export const Size = () => {
  const [size, setSize] = useState(itemsList[0]);

  return (
    <DropDown
      list={itemsList.slice(1)}
      title="select size"
      value={size.label}
      setter={(item) => setSize(item)}
    />
  );
};
