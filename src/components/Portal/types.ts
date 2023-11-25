export interface IProps {
  visible: boolean;
  children: React.ReactElement;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
