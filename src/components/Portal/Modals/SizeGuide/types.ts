export interface IProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalTitleProps {
  onClose: () => void;
}
