export interface IProps {
  inputKey: string;
  type: string;
  label: string;
  value: string;
  onChange: (val:string) => void;
}