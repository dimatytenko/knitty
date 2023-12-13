import { useState } from 'react';
import { Text2Bold } from '../../ui-kit/Typography';
import { Portal } from '../Portal';
import { SizeGuideModal } from '../Portal/Modals/SizeGuide';

export const SizeGuideButton = () => {
  const [visible, setIsVisible] = useState<boolean>(false);
  const onClick = () => {
    setIsVisible(true);
  };

  return (
    <>
      <button type="button" onClick={onClick}>
        <Text2Bold $case="uppercase">size guide</Text2Bold>
      </button>
      <Portal visible={visible} setIsVisible={setIsVisible}>
        <SizeGuideModal />
      </Portal>
    </>
  );
};
