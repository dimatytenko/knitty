import { createPortal } from 'react-dom';
import { IProps } from './types';
import { BackDrop } from './Backdrop';

const rootModal = document.querySelector('#modal')!;

export const Portal = ({ children, visible = false, setIsVisible }: IProps) => {
  if (!visible) return;

  return createPortal(
    <BackDrop setIsVisible={setIsVisible}>{children}</BackDrop>,
    rootModal,
  );
};
