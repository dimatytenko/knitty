
export interface IProps {
  name: string;
  price: number;
  id: number;
  img_preview: string;

  setData: React.Dispatch<React.SetStateAction<any>>;
}
