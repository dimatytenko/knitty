import { useState } from 'react';
import { Text2Bold } from '../../../ui-kit/Typography';
import { listRight } from '../../Layout/constants';
import { Portal } from '../../Portal';
import { NavList } from '../NavList';
import { ModalCart } from '../../Portal/Modals/Cart';

export const HeaderBlockBottomRight = () => {
  const [visible, setIsVisible] = useState<boolean>(false);

  const onClick = () => {
    setIsVisible(true);
  };

  return (
    <>
      <NavList list={listRight} />
      <button type="button" onClick={onClick}>
        <Text2Bold $case="uppercase">cart</Text2Bold>
      </button>
      <Portal visible={visible} setIsVisible={setIsVisible}>
        <ModalCart />
      </Portal>
    </>
  );
};
