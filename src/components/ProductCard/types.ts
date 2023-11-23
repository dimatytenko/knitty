export interface IProps {
  title: string;
  price: number;
  id: string;

  handleAddToCart: (id: string) => void;
  handleAddToFavourites: (id: string) => void;
}
