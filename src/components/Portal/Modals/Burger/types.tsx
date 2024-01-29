import { TextColor } from "../../../../ui-kit/Typography/types";

export interface IProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


export interface IButton{
  onClose: ()=>void;
}

export interface IModalFooter {
  color: TextColor;
  closeModal: () => void;
}