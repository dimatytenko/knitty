export interface IProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


export interface IButton{
  onClose: ()=>void;
}