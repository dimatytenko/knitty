import { useState } from 'react';
import { Portal } from '../Portal';
import { SizeGuideModal } from '../Portal/Modals/SizeGuide';
import { StyledSizeGuideButton } from './styles';
import { ArrowIcon } from '../Sort/styles';

export const SizeGuideButton = () => {
  const [visible, setIsVisible] = useState<boolean>(false);
  const onClick = () => {
    setIsVisible(true);
  };

  return (
    <>
      <StyledSizeGuideButton as="button" type="button" onClick={onClick}>
        size guide
        <ArrowIcon />
      </StyledSizeGuideButton>
      <Portal visible={visible} setIsVisible={setIsVisible}>
        <SizeGuideModal />
      </Portal>
    </>
  );
};
