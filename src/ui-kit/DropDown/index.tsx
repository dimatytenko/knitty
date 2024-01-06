import { useState } from 'react';
import { MenuMore } from '../MenuMore';
import { ArrowIcon, ItemWrapper, Wrapper } from '../../components/Sort/styles';
import { Text3Bold } from '../Typography';
import { IProps } from './types';

export const DropDown = ({ list, title, value, setter }: IProps) => {
  const [open, setOpen] = useState(false);

  const items = list.map((item) => ({
    key: item.label,
    label: (
      <ItemWrapper onClick={() => setter(item)}>
        <Text3Bold
          $case="uppercase"
          color="primary"
        >
          {item.label}
        </Text3Bold>
      </ItemWrapper>
    ),
  }));

  return (
    <MenuMore
      items={items}
      onOpenChange={(boolean: boolean) => setOpen(boolean)}
    >
      <Wrapper>
        <Text3Bold $case="uppercase">{title}</Text3Bold>
        <Text3Bold $case="uppercase" color="unfocus">
          {value}
        </Text3Bold>
        <ArrowIcon $open={open} />
      </Wrapper>
    </MenuMore>
  );
};
